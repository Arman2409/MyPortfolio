"use client"
import { useEffect, useState } from "react";

import styles from "./styles/Loading.module.scss";

const Loading = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, [])

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