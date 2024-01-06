import styles from "./styles/Language.module.scss";
import configs from "../../../../../configs/languages";
import type { LanguageProps } from "../../../../types/languages";

const { percentColor } = { ...configs }

const Language = ({ name, percent }: LanguageProps) => (
    <div
        className={styles.language}
    >
        <div
            className={styles.language_percent}
            style={{
                background: `conic-gradient(${percentColor} calc(${percent}%), #0000 0)`,
            }}
        />
        {name}
    </div>
)

export default Language;