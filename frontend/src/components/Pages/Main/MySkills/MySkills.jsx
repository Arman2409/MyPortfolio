import React from "react";
import { Box, LinearProgress, Typography} from "@mui/material";
import mainStyles from "../../../../styles/main.scss";

function LinearProgressWithLabel(props) {
    return (
      <Box display="flex" alignItems="center" p={0.5}>
        <Box width="100%" mr={3}>
          <LinearProgress 
           className="linear-progress"
           variant="determinate" 
           {...props} 
           color="primary"
            />
        </Box>
        <Box minWidth={35}>
          <Typography 
            variant="body2" 
            color="textSecondary"
            className="skill-value">
          {`${Math.round(
            props.value
          )}%`}
          </Typography>
        </Box>
      </Box>
    );
};

function Askill ({skillName, percentage}){
   return(
    <Box
     sx={{
        width: "100%",
        height: "100%",
        padding: "15px 0",
        "&:hover .skill-name": {
            transition: "0.5s",
            fontSize: "35px"
        },
        "&:hover .linear-progress": {
          transition: "0.5s",
          height: "10px"
        },
        "&:hover .skill-value":{
          transition: "0.5s",
          fontSize: "20px"
        }
     }}>
        <Typography
          className="skill-name"
          variant="h5"
          sx={{
            margin: "0px",
            backgroundImage: "linear-gradient(to left, brown, skyblue, violet, indigo, green, blue, orange, red)",
            backgroundSize: "100px",
            backgroundClip: "text",
            color:"transparent",
           }}>
           {skillName}
          </Typography>
        <LinearProgressWithLabel value={percentage} />
     </Box>
   );
}

const skills = [["HTML", 90], ["CSS", 80], ["JavaScript", 60], ["React", 50], ["Node.js", 40], ["MongoDb", 40]]

function MySkills() {
    return(
        <Box sx={{
             width: "80%",
             height: "500px",
             padding: "20px",
             backgroundColor: mainStyles.backgroundColor2,
             boxShadow: mainStyles.mainShadow,
             border: `1px solid ${mainStyles.borderColor1}`}}>
            <Typography
              variant="h4"
              color={mainStyles.textColor1}
              sx={{
                fontSize: "35px",
                textAlign: "center"
              }}>
              My Skills
            </Typography>
          {skills.map((elem, index) => (
            <Box 
              key={index}
              sx={{
                width: "100%",
                height: `${100 / (skills.length + 0.5)}%`,
              }}>
              <Askill skillName={elem[0]} percentage={elem[1]} />
            </Box>
          ))};
        </Box>
    )
}

export default MySkills;