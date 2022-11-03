import React from "react";
import {Grid, Link, Typography} from "@mui/material";
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';

import mainStyles from "../../../../styles/main.scss";

function DownloadCV() {
    return (
        <Grid 
        container 
        className="download-cv-container"
        sx={{
         height: "200px",
         width: "40%",
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
           <Typography variant="h4"
             >
               Download my CV
            </Typography>
         </Grid>
         <Grid item sx={{
           width: "40%",
           display: "flex",
           justifyContent: "center",
           alignItems: "center"
         }}>
           <Link
            href="./CV.pdf" 
            download="CV.pdf"
            underline="hover"
            sx={{
              color: mainStyles.textColor2
            }} >
             Download    
           </Link>
           <SimCardDownloadIcon sx={{
              color: mainStyles.textColor2
            }}/>
         </Grid>
      </Grid>
    )
}

export default DownloadCV