import { useCallback } from "react";
import { FaCaretRight, FaGithub, FaLink } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";

import styles from "./styles/Controller.module.scss";
import Screen from "./components/Screen/Screen";
import ControllerButton from "./components/ControllerButton/ControllerButton";
import { takeToLink } from "../../../../../../globals/functions/takeToLink";
import type { PortfolioItem, ControllerProps } from "../../../../../../types/projects";

const Controller = ({ currentItem, portfolio, setCurrentItem }:ControllerProps) => {
    const disableGithubLink = !currentItem.github;
    const disableSiteLink = !currentItem.link;

    const handleItemChange = useCallback((direction: "left" | "right") => {
        const { order } = { ...currentItem };
        if (order === undefined) console.error("Item not provided");
        let newOrder = direction === "left" ? order - 1 : order + 1;
        const itemsCount = portfolio.length;
        if (newOrder === 0) newOrder = itemsCount;
        if (newOrder > itemsCount) newOrder = 1;
        const newItem = portfolio.find(({ order: itemOrder }: PortfolioItem) => itemOrder === newOrder);
        if (!newItem) return;
        setCurrentItem({ ...newItem });
    }, [currentItem, setCurrentItem]);

    const goToLink = useCallback(takeToLink, []);

    return (
        <div className={styles.controller_main}>
            <Screen currentItem={currentItem} />
            <div className={styles.buttons_cont}>
                <ControllerButton
                    icon={<FaCaretLeft />}
                    onClick={() => handleItemChange("left")}
                />
                <ControllerButton
                    onClick={disableGithubLink ? undefined : () => goToLink(currentItem.github || "")}
                    disabled={disableGithubLink}
                    icon={<FaGithub />}
                />
                <ControllerButton
                    onClick={disableSiteLink ? undefined : () => goToLink(currentItem.link || "")}
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