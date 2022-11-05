import { Box} from "@mui/material";
import React from "react";

// import mainStyles from "../../../styles/main.scss";
import DownloadCV from "./DownloadCV/DownloadCV";
import MySkills from "./MySkills/MySkills";
import LanguageSkills from "./LanguageSkills/LanguageSkills";

function MainPage() {
  return (
    <Box sx={{
       display: "flex",
       flexDirection: "column",
       alignItems: "center"
     }}>
      <DownloadCV />
      <MySkills />
      <LanguageSkills />
    </Box>
  )
}

export default MainPage;