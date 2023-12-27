import styles from "./styles/Screen.module.scss";
import { skills } from "../../../../../../../../../data/data.json";

const Screen = ({usedSkills}: {usedSkills: string[]}) => {
    return (
       <div className={styles.screen_main}>
           {usedSkills.map(() => (
            <img src={""} />
           ))}
       </div>
    )
}

export default Screen;