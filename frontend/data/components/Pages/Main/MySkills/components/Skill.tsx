import { CircularProgress } from "@mui/material";
import { motion } from "framer-motion";

type skillProps = {
  zIndex: number,
  imageSource: string,
  percentage: number,
  top: number,
  left: number
}

const Skill:React.FC<skillProps> = ({ zIndex ,imageSource, percentage, top, left }) => (
    <>
     <motion.div 
            className="skill_main"
            style={{
                top,
                left,
                zIndex
            }}
            whileHover={{
                scale: 1.1,
                zIndex: 4,
                transition: {
                    duration: 1
                }
            }}>
            <CircularProgress
                className="skill_main_circular"        
                value={percentage}
                variant="determinate"
            />
            <img 
               alt="My skill"
               src={imageSource}
               className="skill_main_image" />
        </motion.div> 
      </>
);

export default Skill;