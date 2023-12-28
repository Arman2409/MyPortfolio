import React, { useCallback, useState } from "react";

import styles from "./styles/ControllerButton.module.scss";

const ControllerButton = ({ icon, disabled = false, onClick }:
   { icon: React.ReactNode, disabled?: boolean, onClick?: Function }) => {
    
  const [clicked, setClicked] = useState<boolean>(false);
  
  const handleClick = useCallback(() => {
    if(clicked) return;
     setClicked(true);
     setTimeout(() => {
      setClicked(false);
     }, 500)
     onClick && onClick();
  }, [setClicked, clicked])

  return (
    <div
      className={styles.controller_button_main}
      onClick={handleClick}
      style={disabled ? {
        boxShadow: "none",
        transform: "translateY(5px)",
      } : clicked ? {
        boxShadow: "0px 0px",
        transform: "translateY(5px)"
      } : {}}
    >
      <div
        className={styles.controller_button_content}
        style={disabled ? {
          backgroundColor: "red"
        } : clicked ? {
          backgroundColor: "green"
        } : {}}
      >
        {icon}
      </div>
    </div >
  )
}

export default ControllerButton;