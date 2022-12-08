import React, { useRef } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import mainStyles from "../../../../styles/main.scss";
import Demo from "../../../Parts/Demo/Demo";

function LanguageSkill( {language,level} ) {
  const [levelNumber, setLevelNumber] = useState(0);

  useEffect(() => {
     if (level == "A1") setLevelNumber(1)
     if (level == "A2") setLevelNumber(2)
     if (level == "B1") setLevelNumber(3)
     if (level == "B2") setLevelNumber(4)
     if (level == "C1") setLevelNumber(5)
     if (level == "C2") setLevelNumber(6)
     if (!level) setLevelNumber(0)
  }, [])
   return(
       <Grid
        container
        sx={{
          backgroundColor: mainStyles.backgroundColor1,
          height: "50px",
          alignItems: "center",
          flexDirection: {xs: "column", md: "row"},
          justifyContent: "space-between",
          pl: "25px",
          my: "20px",
          border: `0.5px solid ${mainStyles.textColor1}`,
          borderRadius: "5px",
          width: "100%",
          "&:hover .notMain":{
                fontSize: "7px",
          }
        }}>
            <Grid 
            item
            width="auto"
            sx={{
              height: {xs: "50%", md: "100%"},
              display: "flex",
              alignItems: "center"
            }}>
              <Typography 
              color={mainStyles.textColor1}
              variant="h6">
                {language}
              </Typography>
            </Grid>
            <Grid 
            item
            container
            width="80%"
            sx={{
              justifyContent: "space-evenly",
              alignItems: "center",
              height: {xs: "50%", md: "100%"}
            }}>
              <Typography
                className={levelNumber !== 1 ? "notMain": null}
                sx={{
                  color: levelNumber > 0 ?  mainStyles.textColor2 : mainStyles.textColor1,
                  textDecoration: levelNumber == 1 ? "underline": null,
                  transition: "0.5s",
                }}>
                A1
              </Typography>
              <Typography
              className={levelNumber !== 2 ? "notMain": null}
                sx={{
                color: levelNumber > 1 ?  mainStyles.textColor2 : mainStyles.textColor1,
                textDecoration: levelNumber == 2 ? "underline": null,
                transition: "0.5s",
              }}>
                A2
              </Typography>
              <Typography
                className={levelNumber !== 3 ? "notMain": null}
                sx={{
                  color: levelNumber > 2 ?   mainStyles.textColor2 : mainStyles.textColor1,
                  textDecoration: levelNumber == 3 ? "underline": null,
                  transition: "0.5s",
                }}>
                B1
              </Typography>
              <Typography
                className={levelNumber !== 4 ? "notMain": null}
                sx={{
                  color: levelNumber > 3 ?  mainStyles.textColor2 : mainStyles.textColor1,
                  textDecoration: levelNumber == 4 ? "underline": null,  
                  transition: "0.5s",
                  }}>
                B2
              </Typography>
              <Typography 
                className={levelNumber !== 5 ? "notMain": null}
                sx={{
                  color: levelNumber > 4 ?   mainStyles.textColor2 : mainStyles.textColor1,
                  textDecoration: levelNumber == 5 ? "underline": null,
                  transition: "0.5s",
                  }}>
                C1
              </Typography>
              <Typography
                className={levelNumber !== 6 ? "notMain": null}
                sx={{
                  color: levelNumber > 5 ? mainStyles.textColor2 : mainStyles.textColor1,
                  textDecoration: levelNumber == 6 ? "underline": null,
                  transition: "0.5s",
              }}>
                C2
              </Typography>
            </Grid>
       </Grid>
   );
};

function LanguageSkills() {
  const [demoState, setDemoState] = useState(true);
   const mainCont = useRef(null);
   const [mySkills, setMySkills] = useState([]);

   useEffect(() => {
      setTimeout(() => {
        mainCont.current.style.top = "0px";
      }, 1000);
      setDemoState(true);
      axios.get("/getData:languages").then((res) => {
        setMySkills(res.data);
        setDemoState(false);
      });
   }, []);

    return (
        <Box
          ref={mainCont}
          sx={{
            transition: "0.5s",
            position: "relative",
            top: "-2500px",
            padding: "20px",
            backgroundColor: mainStyles.backgroundColor2,
            height: "auto",
            margin: "50px 0",
            width: "80%",
            boxShadow: mainStyles.mainShadow,
          }}>
             <Demo state={demoState} />
            <Typography
              variant="h4"
              color={mainStyles.textColor1}
              fontFamily={"'Pacifico', cursive;"}
              sx={{
                fontSize: "35px",
                textAlign: "center"
              }}>
              My Language Skills
            </Typography>
            {mySkills.map((elem, index) => (
              <Box key={index}>
                <LanguageSkill  language={elem.language} level={elem.level} />
              </Box>
            ))}
        </Box>
    )
}

export default LanguageSkills;