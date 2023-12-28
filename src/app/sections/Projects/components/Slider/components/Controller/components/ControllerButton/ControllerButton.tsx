import React, { useCallback, useState } from "react";

import styles from "./styles/ControllerButton.module.scss";
import { buttonStyles } from "./utils/utils";
import type { ControllerButtonProps } from "../../../../../../../../types/projects";

const ControllerButton = ({ icon, disabled = false, onClick }:ControllerButtonProps) => {

  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    if (clicked) return;
    setClicked(true);
    setTimeout(() => setClicked(false), 500)
    onClick && onClick();
  }, [setClicked, clicked, onClick])

  return (
    <div
      className={styles.controller_button_main}
      onClick={handleClick}
      style={disabled ? buttonStyles.disabled.styles :
        clicked ? buttonStyles.clicked.styles : {}}
    >
      <div
        className={styles.controller_button_content}
        style={disabled ? {
          backgroundColor: buttonStyles.disabled.color
        } : clicked ? {
          backgroundColor:  buttonStyles.clicked.color
        } : {}}
      >
        {icon}
      </div>
    </div >
  )
}

export default ControllerButton;