import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import mainStyles from "../../../../styles/main.scss";
import { useEffect } from "react";
import { useState } from "react";


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
        container>
          <Grid 
           item
           width="auto">
            <Typography 
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
           }}>
            <Typography
              sx={{
                color: levelNumber > 0 ? "green" : "red",
                border: levelNumber == 1 ? `1px solid red` : null,
                borderRadius: levelNumber == 1 ? "50%": null,
              }}>
              A1
            </Typography>
            <Typography
             sx={{
              color: levelNumber > 1 ? "green" : "red",
              border: levelNumber == 2 ? `1px solid red` : null,
              borderRadius: levelNumber == 2 ? "50%": null,
             }}>
              A2
            </Typography>
            <Typography
             sx={{
              color: levelNumber > 2 ? "green" : "red",
              border: levelNumber == 3 ? `1px solid red` : null,
              borderRadius: levelNumber == 3 ? "50%": null,
             }}>
              B1
            </Typography>
            <Typography
             sx={{
              color: levelNumber > 3 ? "green" : "red",
              border: levelNumber == 4 ? `1px solid red` : null,
              borderRadius: levelNumber == 4 ? "50%": null,
            }}>
              B2
            </Typography>
            <Typography 
             sx={{
              color: levelNumber > 4 ? "green" : "red",
              border: levelNumber == 5 ? `1px solid red` : null,
              borderRadius: levelNumber == 5 ? "50%": null,
            }}>
              C1
            </Typography>
            <Typography
             sx={{
              color: levelNumber > 5 ? "green" : "red",
              border: levelNumber == 6 ? `1px solid red` : null,
              borderRadius: levelNumber == 6 ? "50%": null,
            }}>
              C2
            </Typography>
          </Grid>
       </Grid>
   );
};

function LanguageSkills() {
    return (
        <Box sx={{
          padding: "20px",
          backgroundColor: mainStyles.backgroundColor2,
          height: "400px",
          margin: "50px 0",
          width: "80%",
          boxShadow: mainStyles.mainShadow,
        }}>
            <Typography
              variant="h4"
              color={mainStyles.textColor1}
              sx={{
                fontSize: "35px",
                textAlign: "center"
              }}>
              My Language Skills
            </Typography>
            <LanguageSkill language={"English"} level={"B2"} />
        </Box>
    )
}

export default LanguageSkills;