import React from "react";
import { Box, LinearProgress, Typography} from "@mui/material";
import mainStyles from "../../../../styles/main.scss";

function LinearProgressWithLabel(props) {
    return (
      <Box display="flex" alignItems="center" p={3}>
        <Box width="100%" mr={3}>
          <LinearProgress variant="determinate" {...props} color="primary" />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary">
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
        padding: "5px 0",
     }}>
        <Typography
          variant="h4">
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
             border: `1px solid ${mainStyles.borderColor1}`}}>
          {skills.map((elem, index) => (
            <Box 
              key={index}
              sx={{
                width: "100%",
                height: `${100 / skills.length}%`,
              }}>
              <Askill skillName={elem[0]} percentage={elem[1]} />
            </Box>
          ))};
        </Box>
    )
}

export default MySkills;