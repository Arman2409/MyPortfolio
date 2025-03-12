import styles from "./styles/Language.module.scss";
import colors from "../../../../../../styles/colors.module.scss";
import configs from "../../../../../../configs/languages";
import type { Language as LanguageType } from "../../../../../../types/languages";

const { percentColor } = { ...configs }

const Language = ({
    name,
    percent
}: LanguageType) => (
    <div
        className={styles.language}
    >
        <div
            className={styles.language_percent}
            style={{
                background: `conic-gradient(${percentColor} calc(${percent}%), ${colors.black} 0)`,
            }}
        />
        <p className={styles.language_name}>
            {name}
        </p>
    </div>
)

export default Language;