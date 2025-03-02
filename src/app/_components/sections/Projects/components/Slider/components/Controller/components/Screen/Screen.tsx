import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./styles/Screen.module.scss";
import { getUrls } from "./utils/functions";
import type { ScreenProps } from "../../../../../../../../../../types/projects";

const Screen = ({
    currentItem,
    loading
}: ScreenProps) => {
    const { usedSkills, title, description } = { ...currentItem };
    const urls = getUrls(usedSkills);
    const [pointsCount, setPointsCount] = useState<number>(0);

    useEffect(() => {
        let updateInterval = null;

        if (loading) {
            setPointsCount(1);
            updateInterval = setInterval(() => {
                setPointsCount(curr => {
                    console.log(curr);

                    if (curr < 4) {
                        return curr + 1;
                    } else {
                        return 1;
                    }
                })
            }, 500)
        } else {
            if (updateInterval) clearInterval(updateInterval);
            setPointsCount(0)
        }

        return () => {
            if (updateInterval) clearInterval(updateInterval)
        };
    }, [setPointsCount, loading])

    return (
        <div className={styles.screen_main}>
            {loading ? <p className={styles.loading}>{
                ".".repeat(Number(pointsCount))
            }</p> : <>
                <h2 className={styles.item_title}>
                    {title}
                </h2>
                <p className={styles.item_description}>
                    {description}
                </p>
                <div className={styles.skills_cont}>
                    {urls.map((url: string) => (
                        <Image
                            key={url}
                            src={url}
                            width={40}
                            height={40}
                            alt="Skill Used"
                            className={styles.screen_skill}
                        />
                    ))}
                </div>
            </>}
        </div>
    )
}

export default Screen;