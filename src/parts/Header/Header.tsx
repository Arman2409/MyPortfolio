import styles from "./styles/Header.module.scss";
import Menu from "./components/Menu/Menu";
const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo_cont}>

            </div>
            <Menu />
        </div>
    )
}

export default Header;