import ControllerButton from "./components/ControllerButton/ControllerButton";
import styles from "./styles/Controller.module.scss";
import { FaCaretRight } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";


const Controller = () => {
    return (
        <div className={styles.controller_main}>
           <ControllerButton icon={<FaCaretLeft />}/>
           <ControllerButton icon={<FaCaretRight />}/>
        </div>
    )
}

export default Controller;