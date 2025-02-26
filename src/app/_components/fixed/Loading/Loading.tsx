"use client"
import { useEffect, useState } from "react";

import styles from "./styles/Loading.module.scss";
import { loadingDelay } from "../../../../configs/loading";

const Loading = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, loadingDelay * 1000)
    }, [setIsLoading])

    return (
        <>
            {isLoading && <div
                className={styles.loading}>
                <img
                    className={styles.loading_image}
                    alt="Loading..."
                    src="./loading.gif">
                </img>
            </div>}
        </>
    )
}

export default Loading;