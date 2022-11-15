import React from "react";
import { Avatar, Box, LinearProgress, Typography} from "@mui/material";
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
            />
        </Box>
        <Box minWidth={35}>
          <Typography 
            variant="body2" 
            color="textSecondary"
            className="skill-value"
            sx={{
              color: mainStyles.textColor2
            }}>
          {`${Math.round(
            props.value
          )}%`}
          </Typography>
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
           sx={{
            borderRadius: "0px",
            height: {xs: "35px", md: "50px"},
            width: {xs: "35px", md: "50px"},
           }}
           src={imageSource} />
        <LinearProgressWithLabel value={percentage} />
     </Box>
   );
}

// const skills = [[source: , percentage: 90], ["CSS", percentage: 80], ["SCSS", 50], ["JavaScript", 60], ["React.js", 50], ["Node.js", 40], ["Express.js", 40], ["MongoDb", 40], ["PostgreSQL", 20], ["Docker", 30]];
const skills = [ {source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png", percentage: 90}, 
                 {source: "https://1000marcas.net/wp-content/uploads/2021/02/CSS-Logo.png", percentage: 80},
                 {source: "https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png", percentage: 60},
                 {source: "https://static.javatpoint.com/images/javascript/javascript_logo.png", percentage: 70},
                 {source: "https://www.datocms-assets.com/45470/1631110818-logo-react-js.png", percentage: 50},
                 {source: "https://v4.material-ui.com/static/logo.png", percentage: 40},
                 {source: "https://hermes.digitalinnovation.one/tracks/673c85f4-a1cb-40b7-a6fd-7f9becb379f6.png", percentage: 40},
                 {source: "https://miro.medium.com/max/512/1*doAg1_fMQKWFoub-6gwUiQ.png", percentage: 40},
                 {source: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_251be2af3ae607c45c14e816eaa1cf41/postgresql.png", percentage: 20},
                 {source: "https://d1.awsstatic.com/acs/characters/Logos/Docker-Logo_Horizontel_279x131.b8a5c41e56b77706656d61080f6a0217a3ba356d.png", percentage: 30},
]
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
              <Askill imageSource={elem.source} percentage={elem.percentage} />
            </Box>
          ))}
        </Box>
    )
}

export default MySkills;