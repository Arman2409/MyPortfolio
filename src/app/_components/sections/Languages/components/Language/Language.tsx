import styles from "./styles/Language.module.scss";
import configs from "../../../../../../configs/languages";
import type { Language } from "../../../../../../types/languages";

const { percentColor } = { ...configs }

const Language = ({ name, percent }: Language) => (
    <div
        className={styles.language}
    >
        <div
            className={styles.language_percent}
            style={{
                background: `conic-gradient(${percentColor} calc(${percent}%), #0000 0)`,
            }}
        />
        <p className={styles.language_name}>
            {name}
        </p>
    </div>
)

export default Language;