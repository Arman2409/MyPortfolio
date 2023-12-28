import { useCallback, useState } from "react";
import { FaCaretRight, FaGithub, FaLink, FaLinkedin } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";

import styles from "./styles/Controller.module.scss";
import Screen from "./components/Screen/Screen";
import ControllerButton from "./components/ControllerButton/ControllerButton";
import type { PortfolioItem } from "../../../../../../types/projects";

const Controller = ({ currentItem, portfolio, setCurrentItem }:
    {
        currentItem: PortfolioItem, portfolio:
            PortfolioItem[], setCurrentItem: Function
    }) => {
    const [chosenItem, setChosenItem] = useState<PortfolioItem>({} as PortfolioItem)
    const [nextAvailable, setNextAvailable] = useState<boolean>(false);
    const [prevAvailable, setPrevAvailable] = useState<boolean>()

    const handleItemChange = useCallback((change: number) => {
        const { order } = { ...currentItem };
        if (order === undefined) console.error("Item not provided");
        const newItem = portfolio.find(({ order: itemOrder }: PortfolioItem) => itemOrder === order + change);
        if (!newItem) return;
        setCurrentItem({ ...newItem });
    }, [setCurrentItem]);

    return (
        <div className={styles.controller_main}>
            <Screen currentItem={currentItem} />
            <div className={styles.buttons_cont}>
                <ControllerButton
                    icon={<FaCaretLeft />}
                    onClick={() => handleItemChange(-1)}
                />
                <ControllerButton
                    disabled={!currentItem.github}
                    icon={<FaGithub />}
                />
                <ControllerButton
                    disabled={!currentItem.link}
                    icon={<FaLink />}
                />
                <ControllerButton
                    icon={<FaCaretRight />}
                    onClick={() => handleItemChange(1)}
                />
            </div>
        </div>
    )
}

export default Controller;