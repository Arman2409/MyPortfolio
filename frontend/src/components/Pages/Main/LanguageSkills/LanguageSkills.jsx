import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import mainStyles from "../../../../styles/main.scss";
import Demo from "../../../Parts/Demo/Demo";
import LanguageSkill from "./components/LanguageSkill";


const LanguageSkills = () => {
  const [demoState, setDemoState] = useState(true);
  const [mySkills, setMySkills] = useState([]);
  const mainCont = useRef(null);

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
          <LanguageSkill language={elem.language} level={elem.level} />
        </Box>
      ))}
    </Box>
  )
}

export default LanguageSkills;