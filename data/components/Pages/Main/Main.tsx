import { useEffect } from "react";
import { Box} from "@mui/material";

import About from "./About/About";
import MySkills from "./MySkills/MySkills";
import LanguageSkills from "./LanguageSkills/LanguageSkills";

function MainPage() {

  useEffect(() => {
    window.scrollTo({top: 0});
  }, []);

  return (
    <Box sx={{
       display: "flex",
       flexDirection: "column",
       alignItems: "center",
       position: "relative",
     }}>
      <About />
      <MySkills />
      <LanguageSkills />
    </Box>
  )
}

export default MainPage;