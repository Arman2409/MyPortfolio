"use client"
import { useEffect, useRef, useState } from "react";

import styles from "./styles/Slider.module.scss";
import Controller from "./components/Controller/Controller";
import data from "../../../../../data/data.json";
import type { PortfolioItem } from "../../../../types/projects";

const { projects } = { ...data };

const Slider = () => {
    const [currentItem, setCurrentItem] = useState<PortfolioItem>(projects[0]);
    const sliderCont = useRef<HTMLDivElement|null>(null);
    const sliderImage = useRef<HTMLImageElement>();
    const initializingImage = useRef<boolean>(false);

    useEffect(() => {
        if (initializingImage.current) return;
        initializingImage.current = true;
        const image = document.createElement("img");
        image.src = currentItem.img;

        image.onload = () => {
            image.setAttribute("class", styles.slider_image);
            setTimeout(() => {
                if (sliderImage.current) {
                    sliderImage.current.style.top = "100%";
                    sliderImage.current.style.left = "-100%";
                }
                image.style.top = "0px";
                image.style.left = "0px";
                sliderImage.current = image;
            }, 100)
            if(sliderCont.current) {
                sliderCont.current.append(image)
            }
            initializingImage.current = false;
        }
    }, [currentItem]);

    return (
        <div className={styles.slider_main}>
            <div
                ref={sliderCont}
                className={styles.slider_cont}
            />
            <div className={styles.controllers_cont}>
                <Controller
                    currentItem={currentItem}
                    portfolio={projects}
                    setCurrentItem={setCurrentItem} />
            </div>
        </div>
    )
}

export default Slider;