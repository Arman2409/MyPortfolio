import React from "react";
import styles from "./styles/ControllerButton.module.scss";

const ControllerButton = ({icon, ...props}: {icon: React.ReactNode}) => {
    return (
        <div 
          className={styles.controller_button_main}
          {...props}>
          <div 
            className={styles.controller_button_content}>
                {icon}
          </div>
        </div>
    )
} 

export default ControllerButton;