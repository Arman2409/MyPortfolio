import { Box} from "@mui/material";
import React from "react";

import mainStyles from "../../../styles/main.scss";
import DownloadCV from "./DownloadCV/DownloadCV";
import MySkills from "./MySkills/MySkills";

function MainPage() {
  return (
    <Box sx={{
       display: "flex",
       flexDirection: "column",
       alignItems: "center"
     }}>
      <DownloadCV />
      <MySkills />
    </Box>
  )
}

export default MainPage;