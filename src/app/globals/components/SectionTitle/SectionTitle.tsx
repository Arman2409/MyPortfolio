import styles from "./styles/SectionTitle.module.scss";

const SectionTitle = ({ title }: { title: string }) => {
    return (
        <div className={styles.title_cont}>
            <div className={styles.content_cont_1} />
            <div className={styles.content_cont_2} />
            <h2 className={styles.title}>
                {title}
            </h2>
        </div>
    )
}

export default SectionTitle;