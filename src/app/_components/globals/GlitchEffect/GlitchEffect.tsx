import type { GlitchEffectProps } from "../../../../types/glitchEffect"

import styles from "./styles/GlitchEffect.module.scss";

const GlitchEffect = ({
    linesCount = 5,
    lineColor = "grey",
}: GlitchEffectProps) => {
    const items = Array.from({ length: linesCount }, (_, index) => index);

    return (
        <>
            {items.map(value => (
                <div
                    key={value}
                    className={styles.glitch_line}
                    style={{
                        animationDelay: value + Math.floor(Math.random()) + "s",
                        backgroundColor: lineColor,
                    }}
                ></div>
            ))}
        </>
    )
}

export default GlitchEffect;