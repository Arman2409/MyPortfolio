import styles from "./styles/Skill.module.scss";
import type { SkillProps } from "../../../../types/skills";

const Skill = ({src, dimesion}:SkillProps) => {
    const {x, y} = {...dimesion};

    return (
        <div 
          className={styles.skill}
          style={{
            top: y + "px",
            left: x + "px"
          }}
        >
            <img 
              className={styles.skill_image}
              src={src} />
        </div>
    )
}

export default Skill;