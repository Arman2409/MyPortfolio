"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

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
                <Image
                    width={300}
                    height={300}
                    alt="Loading..."
                    src="/loading.gif"
                />
            </div>}
        </>
    )
}

export default Loading;