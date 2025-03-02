import { useCallback } from "react";
import { FaCaretRight, FaGithub, FaLink } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";

import styles from "./styles/Controller.module.scss";
import { takeToLink } from "../../../../../../../../helpers/takeToLink";
import Screen from "./components/Screen/Screen";
import ControllerButton from "./components/ControllerButton/ControllerButton";
import type { PortfolioItem, ControllerProps } from "../../../../../../../../types/projects";

const Controller = ({
    currentItem,
    portfolio,
    loading,
    setCurrentItem
}: ControllerProps) => {
    const disableGithubLink = !currentItem.github;
    const disableSiteLink = !currentItem.link;

    const handleItemChange = useCallback((direction: "left" | "right") => {
        const { order } = { ...currentItem };
        if (!Number(order)) {
            return console.error("Current item or its order not provided");
        };
        // Get new order by the direction
        let newOrder = direction === "left" ? order - 1 : order + 1;
        const itemsCount = portfolio.length;
        if (newOrder === 0) newOrder = itemsCount;
        if (newOrder > itemsCount) newOrder = 1;
        const newItem = portfolio.find(({ order: itemOrder }: PortfolioItem) => itemOrder === newOrder);
        if (!newItem) {
            return console.error("Item with the order not found");
        }
        setCurrentItem({ ...newItem });
    }, [portfolio, currentItem, setCurrentItem]);

    const goToLink = useCallback(takeToLink, []);

    return (
        <div className={styles.controller_main}>
            <Screen 
            loading={loading} 
            currentItem={currentItem} />

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