"use client"
import { useEffect, useRef, useState } from "react";

import styles from "./styles/Slider.module.scss";
import Controller from "./components/Controller/Controller";
import data from "../../../../../../data/data.json";
import type { PortfolioItem } from "../../../../../../types/projects";
import GlitchEffect from "@/app/_components/globals/GlitchEffect/GlitchEffect";

const { projects } = { ...data };

const Slider = () => {
    const [currentItem, setCurrentItem] = useState<PortfolioItem>(projects[0]);
    const sliderCont = useRef<HTMLDivElement | null>(null);
    const sliderImage = useRef<HTMLImageElement>();
    const initializingImage = useRef<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        // return;
        if (initializingImage.current) return;
        initializingImage.current = true;
        setLoading(true);

        const image = document.createElement("img");
        image.src = currentItem.img;
        image.onload = () => {
            image.setAttribute("class", styles.slider_image);
            setTimeout(() => {
                setLoading(false);
                if (sliderImage.current) {
                    sliderImage.current.style.top = "100%";
                    sliderImage.current.style.left = "0%";
                }
                image.style.top = "0px";
                image.style.left = "0px";
                sliderImage.current = image;
            }, 150);
            
            if (sliderCont.current) {
                sliderCont.current.prepend(image)
            }
            initializingImage.current = false;
        }
    }, [currentItem, setLoading]);

    return (
        <div className={styles.slider_main}>
            <div
                ref={sliderCont}
                className={styles.slider_content}
            >
               <GlitchEffect />
            </div>
            <Controller
                currentItem={currentItem}
                portfolio={projects}
                loading={loading}
                setCurrentItem={setCurrentItem} />
        </div>
    )
}

export default Slider;