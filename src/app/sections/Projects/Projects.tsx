import styles from "./styles/Projects.module.scss";
import SectionTitle from "../../globals/components/SectionTitle/SectionTitle";
import Slider from "./components/Slider/Slider";


const Projects = () => (
   <div className={styles.projects_main}>
      <SectionTitle title="Projects" />
      <Slider />
   </div>
)

export default Projects;