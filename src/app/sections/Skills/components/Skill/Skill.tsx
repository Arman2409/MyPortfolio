import styles from "./styles/Skill.module.scss";
import configs from "../../../../../configs/skills";
import type { SkillProps } from "../../../../types/skills";

const { skillSize } = { ...configs };

const Skill = ({ src, dimesion }: SkillProps) => {
  if (!src) {
    console.error("Image source not provided");
    return <></>;
  };

  const { x, y } = { ...dimesion };

  return (
    <div
      className={styles.skill}
      style={{
        width: skillSize + "px",
        height: skillSize + "px",
        top: y - skillSize / 2 + "px",
        left: x - skillSize / 2 + "px"
      }}
    >
      <img
        className={styles.skill_image}
        src={src} />
    </div >
  )
}

export default Skill;