import { useCallback } from "react";
import { FaCaretRight, FaGithub, FaLink, FaLinkedin } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";

import styles from "./styles/Controller.module.scss";
import Screen from "./components/Screen/Screen";
import ControllerButton from "./components/ControllerButton/ControllerButton";
import type { PortfolioItem } from "../../../../../../types/projects";

const Controller = ({ currentItem, portfolio, setCurrentItem }:
    {
        currentItem: PortfolioItem,
        portfolio: PortfolioItem[],
        setCurrentItem: Function
    }) => {
    const disableGithubLink = !currentItem.github;
    const disableSiteLink = !currentItem.link;

    const handleItemChange = useCallback((direction: "left" | "right") => {
        const { order } = { ...currentItem };
        const newOrder = direction === "left" ? order - 1 : order + 1;
        if (order === undefined) console.error("Item not provided");
        const newItem = portfolio.find(({ order: itemOrder }: PortfolioItem) => itemOrder === newOrder);
        if (!newItem) return;
        setCurrentItem({ ...newItem });
    }, [currentItem, setCurrentItem]);

    const takeToLink = useCallback((href: string) => {
        const link = document.createElement("a");
        link.target = "_blank";
        link.href = href;
        link.click();
    }, []);

    return (
        <div className={styles.controller_main}>
            <Screen currentItem={currentItem} />
            <div className={styles.buttons_cont}>
                <ControllerButton
                    icon={<FaCaretLeft />}
                    onClick={() => handleItemChange("left")}
                />
                <ControllerButton
                    onClick={disableGithubLink ? undefined : () => takeToLink(currentItem.github || "")}
                    disabled={disableGithubLink}
                    icon={<FaGithub />}
                />
                <ControllerButton
                    onClick={disableSiteLink ? undefined : () => takeToLink(currentItem.link || "")}
                    disabled={disableSiteLink}
                    icon={<FaLink />}
                />
                <ControllerButton
                    icon={<FaCaretRight />}
                    onClick={() => handleItemChange("right")}
                />
            </div>
        </div>
    )
}

export default Controller;