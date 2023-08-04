import { CircularProgress } from "@mui/material";

const  Skill = ({ zIndex ,imageSource, percentage, top, left }) => (
     <div 
            className="skill_main"
            style={{
                top,
                left,
                zIndex
            }}>
            <CircularProgress
                className="skill_main_circular"        
                value={percentage}
                variant="determinate"
            />
            <img 
               src={imageSource}
               className="skill_main_image" />
        </div>

);

export default Skill;