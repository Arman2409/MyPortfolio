"use client"
import { useState } from "react";

import styles from "./styles/Slider.module.scss";
import Controller from "./components/Controller/Controller";
import { portfolio } from "../../../../../data/data.json";
import type { PortfolioItem } from "../../../../types/projects";

const Slider = () => {
    const [currentItem, setCurrentItem] = useState<PortfolioItem>(portfolio[0] as PortfolioItem);

    return (
        <div className={styles.slider_main}>
            <div
                className={styles.slider_cont}
                >
                <div className={styles.slider_holder} 
                style={{
                    width: 100 * portfolio.length + "%",
                    left: -currentItem.order * (100 / portfolio.length) + "%",
                }}>
                    {portfolio.map((skill: any) => (
                        <img
                            src={skill.img}
                            className={styles.slider_image}
                            style={{
                                width: 100 / portfolio.length + "%"
                            }} />
                    ))}
                </div>
            </div>
            <div className={styles.controllers_cont}>
                <Controller 
                 currentItem={currentItem} 
                 portfolio={portfolio}
                 setCurrentItem={setCurrentItem}/>
            </div>
        </div>
    )
}

export default Slider;