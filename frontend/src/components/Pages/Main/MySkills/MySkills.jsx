import React from "react";
import { Avatar, Box, LinearProgress, Typography} from "@mui/material";
import { useRef , useState} from "react";
import { useEffect } from "react";
import axios from "axios";

import mainStyles from "../../../../styles/main.scss";
import Demo from "../../../Parts/Demo/Demo";

function LinearProgressWithLabel(props) {
    return (
      <Box display="flex" alignItems="center" p={0.5}>
        <Box width="100%" mr={3}>
          <LinearProgress 
           className="linear-progress"
           variant="determinate" 
           value={props.percentage}
           {...props} 
            />
        </Box>
      </Box>
    );
};

function Askill ({imageSource, percentage}){
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
          <Avatar 
           alt="..."
           sx={{
            borderRadius: "0px",
            height: {xs: "35px", md: "50px"},
            width: {xs: "35px", md: "50px"},
           }}
           src={imageSource} />
        <LinearProgressWithLabel  percentage={percentage}/>
     </Box>
   );
}

function MySkills() {
   const mainCont = useRef(); 
   const [skills, setSkills] = useState([]);
   const [demoState, setDemoState] = useState(true);

   useEffect(() => {
     setTimeout(() => {
       mainCont.current.style.top = "0px";
     }, 1000)
     setDemoState(true);
     axios.get("/getData:skills").then(resp => {
       setSkills(resp.data);
       setDemoState(false);
     });
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
             marginTop: "50px",
             backgroundColor: mainStyles.backgroundColor2,
             boxShadow: mainStyles.mainShadow,
             border: `1px solid ${mainStyles.borderColor1}`}}>
              <Demo state={demoState}/>
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
                <Askill imageSource={elem.source} percentage={elem.percentage} />
              </Box>
            ))}
        </Box>
    )
}

export default MySkills;