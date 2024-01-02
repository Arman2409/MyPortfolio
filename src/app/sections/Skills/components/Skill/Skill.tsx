import { useState } from "react";

import styles from "./styles/Skill.module.scss";
import configs from "../../../../../configs/skills";
import type { SkillProps } from "../../../../types/skills";
import { getScreenSize } from "../../../../globals/functions/getScreenSize";

let { skillSize, breakpoints } = { ...configs };

const Skill = ({ src, dimesion }: SkillProps) => {
  if (!src) {
    console.error("Image source not provided");
    return <></>;
  };
  const [screenSize, setScreenSize] = useState<string>(getScreenSize(window.innerWidth, breakpoints));
  const { x, y } = { ...dimesion };

  return (
    <div
      className={styles.skill}
      style={{
        width: screenSize === "medium" || screenSize === "small" ? skillSize / 2 : skillSize + "px",
        height: screenSize === "medium" || screenSize === "small" ? skillSize / 2 : skillSize + "px",
        top: y - (screenSize === "medium" || screenSize === "small" ? skillSize / 4 : skillSize / 2) + "px",
        left: x - (screenSize === "medium" || screenSize === "small" ? skillSize / 4 : skillSize / 2) + "px"
      }}
    >
      <img
        className={styles.skill_image}
        src={src} />
    </div >
  )
}

export default Skill;