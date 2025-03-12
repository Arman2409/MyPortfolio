"use client"
import { useCallback, useEffect, useRef, useState } from "react";
import { ImMenu } from "react-icons/im";

import styles from "./styles/Menu.module.scss";
import configs from "../../../../../../configs/header";
import drawConnections from "./utils/drawConnections";
import type { MenuItem } from "../../../../../../types/header";
import type { Point } from "../../../../../../types/global";

const { menuItems,
   menuItemHeight,
   menuItemWidth,
   menuLineColor,
   menuDrawInterval,
   menuLineWidth,
   switchToSmallWidth } = { ...configs };

const Menu = () => {
   const [menuOpen, setMenuOpen] = useState<boolean>(false);
   const [items, setItems] = useState<MenuItem[]>([]);
   const menuCanvas = useRef<HTMLCanvasElement>(null);

   const revertmenuOpen = useCallback(() => {
      setMenuOpen(current => !current)
   }, [setMenuOpen])

   const clickItem = useCallback((event: MouseEvent, scrollTo: number) => {
      event.stopPropagation();

      // Close the menu 
      setMenuOpen(false);
      window.scrollTo({
         top: scrollTo,
      });

   }, [setMenuOpen])

   useEffect(() => {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      const itemLocations: Point[] = [];
      const itemsLength = menuItems.length;
      
      // Calculate the height for each menu item 
      const contHeight = itemsLength * menuItemHeight + (itemsLength - 1) * menuItemHeight * 0.25;
      const topOrBottom = (windowHeight - contHeight) / 2;

      const itemsSortedWithHeight = menuItems.map((item: MenuItem) => {
         const { x, y, order } = { ...item };
         const newY = topOrBottom + (menuItemHeight * order) + (order - 1) * 0.25 * menuItemHeight;
         const itemLocation = {
            y: y ? y : newY,
            x: x ? x : windowWidth / 2,
         }
         itemLocations.push(itemLocation);
         return {
            ...item,
            ...itemLocation
         }
      })

      setItems(itemsSortedWithHeight);

      if (menuOpen) {
         const menuCanvas = document.getElementById("menu_canvas") as HTMLCanvasElement;
         menuCanvas.width = windowWidth;
         menuCanvas.height = windowHeight;
         const context = menuCanvas.getContext("2d") as CanvasRenderingContext2D;
         drawConnections(
            context,
            menuItemHeight,
            windowWidth,
            windowHeight,
            menuLineWidth,
            menuDrawInterval,
            menuLineColor,
            itemLocations,
         );
      }
   }, [menuOpen, setItems])

   return (
      <div className={styles.menu_cont}>
         <ImMenu
            className={styles.menu_icon}
            onClick={revertmenuOpen}
            style={{
               transform: `rotate(${menuOpen ? -90 : 0}deg)`
            }}
         />
         {menuOpen && (
            <div
               className={styles.menu_demo}
               onClick={revertmenuOpen}>
               <canvas ref={menuCanvas} id="menu_canvas" />
               {items.map(({ scrollTo, order, title, x = 100, y = 100 }: MenuItem) => (
                  <div
                     key={order}
                     className={styles.menu_item}
                     onClick={(event: any) => clickItem(event, window.innerWidth > switchToSmallWidth ? scrollTo.large : scrollTo.small)}
                     style={{
                        width: menuItemWidth + "px",
                        height: menuItemHeight + "px",
                        top: y - menuItemHeight + "px",
                        left: x - menuItemWidth / 2 + "px",
                     }}
                  >
                     {title}
                  </div>
               )
               )}
            </div>
         )}
      </div>
   )
}

export default Menu;