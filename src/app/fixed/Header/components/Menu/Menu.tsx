"use client"
import { useCallback, useEffect, useRef, useState } from "react";
import { ImMenu } from "react-icons/im";

import styles from "./styles/Menu.module.scss";
import configs from "../../../../../configs/header";
import { drawConnections } from "./utils/functions";
import type { MenuItem, Point } from "../../../../types/header";

const { menuItems, menuItemHeight, menuItemWidth, menuLineColor, menuDrawInterval, menuLineWidth, switchToSmallWidth } = { ...configs };

const Menu = () => {
   const [menuStatus, setMenuStatus] = useState<boolean>(false);
   const [items, setItems] = useState<MenuItem[]>([]);
   const menuCanvas = useRef<any>(null);

   const oppositeMenuStatus = useCallback(() => setMenuStatus(current => !current), [setMenuStatus])

   const clickItem = useCallback((event: MouseEvent, scrollTo: number) => {
      event.stopPropagation();
      setMenuStatus(false);
      window.scrollTo({
         top: scrollTo,
      });
   }, [setMenuStatus, menuStatus])

   useEffect(() => {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      const itemLocations: Point[] = [];
      const itemsLength = menuItems.length;
      const contHeight = itemsLength * menuItemHeight + (itemsLength - 1) * menuItemHeight * 0.25;
      const topAndBottom = (windowHeight - contHeight) / 2;
      setItems(menuItems.map((item: MenuItem) => {
         const { x, y, order } = { ...item };
         const itemLocation = {
            y: y ? y : topAndBottom + (menuItemHeight * order) + (order - 1) * 0.25 * menuItemHeight,
            x: x ? x : windowWidth / 2,
         }
         itemLocations.push(itemLocation);
         return {
            ...item,
            ...itemLocation
         }
      }))
      if (menuStatus) {
         const menuCanvas: any = document.getElementById("menu_canvas")
         menuCanvas.width = windowWidth;
         menuCanvas.height = windowHeight;
         const context = menuCanvas.getContext("2d");
         drawConnections(
            menuItemHeight,
            windowWidth,
            windowHeight,
            menuLineWidth,
            menuDrawInterval,
            menuLineColor,
            itemLocations,
            context);
      }
   }, [menuStatus, setItems])

   return (
      <div className={styles.menu_cont}>
         <ImMenu
            className={styles.menu_icon}
            onClick={oppositeMenuStatus}
            style={{
               transform:  `rotate(${menuStatus ? -90 : 0}deg)`
            }}
         />
         {menuStatus && (
            <div
               className={styles.menu_demo}
               onClick={oppositeMenuStatus}>
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