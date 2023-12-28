import styles from "./styles/Screen.module.scss";
import { getUrls } from "./utils/functions";
import type { ScreenProps } from "../../../../../../../../types/projects";


const Screen = ({ currentItem }: ScreenProps) => {
    const { usedSkills, title } = { ...currentItem };
    const urls = getUrls(usedSkills || []);

    return (
        <div className={styles.screen_main}>
            <h2 className={styles.item_title}>
                {title}
            </h2>
            <div className={styles.skills_cont}>
                {urls.map((url: string) => (
                    <img
                        key={url}
                        src={url}
                        className={styles.screen_skill}
                    />
                ))}
            </div>
        </div>
    )
}

export default Screen;