import { Box} from "@mui/material";
import React from "react";

import About from "./About/About";
import DownloadCV from "./DownloadCV/DownloadCV";
import MySkills from "./MySkills/MySkills";
import LanguageSkills from "./LanguageSkills/LanguageSkills";

function MainPage() {
  return (
    <Box sx={{
       display: "flex",
       flexDirection: "column",
       alignItems: "center",
       position: "relative",
     }}>
      <About />
      <DownloadCV />
      <MySkills />
      <LanguageSkills />
    </Box>
  )
}

export default MainPage;