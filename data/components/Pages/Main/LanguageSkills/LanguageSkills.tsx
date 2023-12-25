import { useRef, useState, useEffect } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";

import mainStyles from "../../../../styles/main.scss";
import Demo from "../../../Parts/Demo/Demo";
import LanguageSkill from "./components/LanguageSkill";
import type { LangSkillProps } from "../../../../types/propTypes";
import { fetchData } from "../../../../API/fetchData";

const LanguageSkills = () => {
  const [demoState, setDemoState] = useState<boolean>(true);
  const [mySkills, setMySkills] = useState<LangSkillProps[]>([]);
  const mainCont = useRef<any>(null);

  const isSmall = useMediaQuery("(max-width:500px)");

  useEffect(() => {
    setTimeout(() => {
      mainCont.current.style.top = "0px";
    }, 1000);
    setDemoState(true);
    fetchData("getData", "languages").then((res:any[]) => {
      setMySkills(res);
      setDemoState(false);
    }).catch((errorMsg:string) => console.error(errorMsg))
  }, [setMySkills, setDemoState, mainCont]);

  return (
    <Box
      ref={mainCont}
      sx={{
        transition: "0.5s",
        position: "relative",
        top: "-2500px",
        padding: "20px",
        width: isSmall ? "100%" : "80%",
        backgroundColor: mainStyles.backgroundColor2,
        height: "auto",
        margin: "50px 0",
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
      {mySkills.map((elem: LangSkillProps, index: number) => (
        <Box key={index}>
          <LanguageSkill language={elem.language} level={elem.level} />
        </Box>
      ))}
    </Box>
  )
}

export default LanguageSkills;