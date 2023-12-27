import styles from "./styles/Slider.module.scss";
import Controller from "./components/Controller/Controller";

const Slider = () => {
    return (
        <div className={styles.slider_main}>
             <div 
              className={styles.slides_cont}>

            </div>
            <div className={styles.controllers_cont}>
                <Controller usedSkills={[]}/>
            </div>
        </div>
    )
}

export default Slider;