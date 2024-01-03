import { useEffect, useState } from "react";

import styles from "./styles/Skill.module.scss";
import configs from "../../../../../configs/skills";
import type { SkillProps } from "../../../../types/skills";
import { getScreenSize } from "../../../../globals/functions/getScreenSize";

let { skillSize, breakpoints } = { ...configs };

const isSmallDimesion = (screen:string) => screen === "medium" || screen === "small" || screen === "verySmall"; 

const Skill = ({ src, dimesion }: SkillProps) => {
  const [screenSize, setScreenSize] = useState<string>("veryLarge");
  const { x, y } = { ...dimesion };

  useEffect(() => {
     setScreenSize(getScreenSize(window.innerWidth, breakpoints));
     window.addEventListener("resize", () => setScreenSize(getScreenSize(window.innerWidth, breakpoints)));
  }, [setScreenSize])

  if (!src) {
    console.error("Image source not provided");
    return <></>;
  };
  return (
    <div
      className={styles.skill}
      style={{
        width: isSmallDimesion(screenSize) ? skillSize / 2 : skillSize + "px",
        height: isSmallDimesion(screenSize) ? skillSize / 2 : skillSize + "px",
        top: y - (isSmallDimesion(screenSize) ? skillSize / 4 : skillSize / 2) + "px",
        left: x - (isSmallDimesion(screenSize) ? skillSize / 4 : skillSize / 2) + "px"
      }}
    >
      <img
        className={styles.skill_image}
        src={src} />
    </div >
  )
}

export default Skill;