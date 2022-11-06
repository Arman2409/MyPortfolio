import React, { useRef } from "react";
import {Button, Grid, Link, Typography} from "@mui/material";
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';

import mainStyles from "../../../../styles/main.scss";
import { useEffect } from "react";

function DownloadCV() {
    const mainCont = useRef(null);

    useEffect(() => {
      setTimeout(() => {
      mainCont.current.style.top = "0px";
      }, 1000)
    }, []);
    return (
        <Grid 
        ref={mainCont}
        container 
        className="download-cv-container"
        sx={{
         transition: "0.5s",
         position: "relative",
         top: "-2500px",
         height: "160px",
         width: "40%",
         margin: "50px 0",
         backgroundColor: mainStyles.backgroundColor2,
         border: "1px solid",
         borderColor: mainStyles.borderColor1,
         boxShadow: mainStyles.mainShadow
        }}>
         <Grid item sx={{
           width: "60%",
           color: mainStyles.textColor1,
           display: "flex",
           justifyContent: "center",
           alignItems: "center"
         }}>
           <Typography 
            variant="h4"
            fontFamily={"'Pacifico', cursive;"}
             >
               Download my CV
            </Typography>
         </Grid>
         <Grid item sx={{
           width: "40%",
           display: "flex",
           justifyContent: "center",
           alignItems: "center",
           transition: "1s",
         }}>
           <Link
            href="./CV.pdf" 
            download="CV.pdf"
            underline="hover"
            sx={{
              width: "auto",
              height: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: mainStyles.textColor2
            }} >
              <Button 
                variant="contained"
                sx={{
                    backgroundColor: mainStyles.backgroundColor1,
                    opacity: 1,
                    color: mainStyles.textColor2,
                    animationName: "button",
                    animationDuration: "1s",
                    animationIterationCount: "infinite",
                    animationDirection: "alternate",
                    "@keyframes button":{
                      from: {
                        borderRadius: "9% 71% 23% 77% / 29% 40% 60% 71%"
                      },
                      to: {
                        borderRadius: "58% 11% 59% 8% / 29% 40% 60% 71%"
                      }
                    },
                }}>
                  Download   
                  <SimCardDownloadIcon sx={{
                    color: mainStyles.textColor2
                  }}/> 
             </Button>
           </Link>
         </Grid>
      </Grid>
    )
}

export default DownloadCV