import styles from "./styles/Languages.module.scss";
import data from "../../../data/data.json";
import Language from "./components/Language/Language";
import SectionTitle from "../../globals/components/SectionTitle/SectionTitle";
import type { Language as LanguageType } from "../../types/languages";

let { languages } = { ...data };

const Languages = () => {
    languages = languages.sort(({ percent: prevPercent }: LanguageType,
        { percent: nextPercent }: LanguageType) => nextPercent - prevPercent);

    return (
        <div className={styles.languages}>
            <SectionTitle title="Language Skills" />
            <div className={styles.languages_cont}>
                {languages.map((language: LanguageType) => {
                    const {id, language:languageName, percent}  = { ...language}
                    return (
                    <Language
                        key={id}
                        name={languageName}
                        percent={percent}
                    />
                )})}
            </div>
        </div>
    )
}

export default Languages;