import { FaCaretRight, FaGithub, FaLink, FaLinkedin } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";

import styles from "./styles/Controller.module.scss";
import Screen from "./components/Screen/Screen";
import ControllerButton from "./components/ControllerButton/ControllerButton";

const Controller = ({usedSkills}:{usedSkills: string[]}) => {
    return (
        <div className={styles.controller_main}>
            <Screen usedSkills={usedSkills}/>
            <div className={styles.buttons_cont}>
                <ControllerButton icon={<FaCaretLeft />} />
                <ControllerButton icon={<FaGithub />} />
                <ControllerButton icon={<FaLink />} />
                <ControllerButton icon={<FaCaretRight />} />
            </div>
        </div>
    )
}

export default Controller;