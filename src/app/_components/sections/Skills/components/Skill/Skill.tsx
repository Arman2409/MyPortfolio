import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./styles/Skill.module.scss";
import configs from "../../../../../../configs/skills";
import { getScreenSize } from "../../../../../../helpers/sizes";
import getSkillStyle from "./functions/getSkillStyle";
import type { SkillProps } from "../../../../../../types/skills";
import type { ScreenSize } from "../../../../../../types/global";

let { skillSize, breakpoints } = { ...configs };

const Skill = ({ src, dimesion }: SkillProps) => {
  const { x, y } = { ...dimesion };
  const [screenSize, setScreenSize] = useState<ScreenSize>("veryLarge");

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize(window.innerWidth, breakpoints))
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenSize])

  if (!src) {
    console.error("Image source not provided");
    return <></>;
  };
  
  return (
    <div
      className={styles.skill}
      style={{
        width: getSkillStyle("width", screenSize, skillSize),
        height: getSkillStyle("height", screenSize, skillSize),
        top: getSkillStyle("top", screenSize, skillSize, y),
        left: getSkillStyle("left", screenSize, skillSize, x)
      }}
    >
      <Image
        alt="My Skill"
        width={75}
        height={75}
        className={styles.skill_image}
        src={src} />
    </div >
  )
}

export default Skill;