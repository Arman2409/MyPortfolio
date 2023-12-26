"use client"
import { MouseEventHandler, useCallback, useEffect, useState } from "react";
import { ImMenu } from "react-icons/im";

import styles from "./styles/Menu.module.scss";
import configs from "../../../../../configs/header";
import type { MenuItem } from "../../../../types/header";

const { menuItems, menuItemHeight, menuItemWidth } = { ...configs };

const Menu = () => {
   const [menuStatus, setMenuStatus] = useState<boolean>(true);
   const [items, setItems] = useState<MenuItem[]>([]);

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
      setItems(menuItems.map((item: MenuItem) => {
         const { x, y, id } = { ...item };
         return {
            ...item,
            y: y ? y : windowHeight / 4 + (windowHeight / 2 / (menuItems.length * id)),
            x: x ? x : windowWidth / 2,
         }
      }))
   }, [setItems])

   return (
      <div className={styles.menu_cont}>
         <ImMenu onClick={oppositeMenuStatus} />
         {menuStatus && (
            <div
               className={styles.menu_demo}
               onClick={oppositeMenuStatus}>
               {items.map(({ scrollTo, id, title, x = 100, y = 100 }: MenuItem) => {
                  return (
                     <div
                        key={id}
                        className={styles.menu_item}
                        onClick={(event:any) => clickItem(event, scrollTo)}
                        style={{
                           width: menuItemWidth + "px",
                           height: menuItemHeight + "px",
                           top: y - menuItemHeight / 2 + "px",
                           left: x - menuItemWidth / 2 + "px",
                        }}
                     >
                        {title}
                     </div>
                  )
               })}
            </div>
         )}
      </div>
   )
}

export default Menu;