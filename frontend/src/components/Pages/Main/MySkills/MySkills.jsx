import React from "react";
import { Box, LinearProgress, Typography} from "@mui/material";
import mainStyles from "../../../../styles/main.scss";
import { useRef } from "react";
import { useEffect } from "react";

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

const skills = [["HTML", 90], ["CSS", 80], ["SCSS", 50], ["JavaScript", 60], ["React.js", 50], ["Node.js", 40], ["Express.js", 40], ["MongoDb", 40], ["PostgreSQL", 20], ["Docker", 30]];

function MySkills() {
   const mainCont = useRef(); 

   useEffect(() => {
     setTimeout(() => {
       mainCont.current.style.top = "0px";
     }, 1000)
   }, []);

    return(
        <Box 
         ref={mainCont}
         sx={{
            transition: "0.5s",
            position: "relative",
            top: "-2500px",
             width: "80%",
             height: "auto",
             padding: "20px",
             backgroundColor: mainStyles.backgroundColor2,
             boxShadow: mainStyles.mainShadow,
             border: `1px solid ${mainStyles.borderColor1}`}}>
            <Typography
              variant="h4"
              color={mainStyles.textColor1}
              fontFamily={"'Pacifico', cursive;"}
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
          ))}
        </Box>
    )
}

export default MySkills;