import styles from "./styles/Languages.module.scss";
import data from "../../../../data/data.json";
import Language from "./components/Language/Language";
import SectionTitle from "../../globals/SectionTitle/SectionTitle";
import type { Language as LanguageType } from "../../../../types/languages";

let { languages } = { ...data };

const Languages = () => {
    const sortedLanguages = [...languages].sort(({ percent: prevPercent }: LanguageType,
        { percent: nextPercent }: LanguageType) => nextPercent - prevPercent);

    return (
        <div className={styles.languages}>
            <SectionTitle title="Languages" />
            <div className={styles.languages_cont}>
                {sortedLanguages.map(({ name: languageName, percent }: LanguageType) => (
                        <Language
                            key={languageName}
                            name={languageName}
                            percent={percent}
                        />
                    )
                )}
            </div>
        </div>
    )
}

export default Languages;