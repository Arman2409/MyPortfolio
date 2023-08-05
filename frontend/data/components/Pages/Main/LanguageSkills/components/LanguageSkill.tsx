import { useState, useEffect } from "react";
import { Typography, Grid } from "@mui/material";

import mainStyles from "../../../../../styles/main.scss";

const levelsArray = ["A1", "A2", "B1", "B2", "C1", "C2"];

type LangSkillProps = {
  language: string,
  level: string
}

const LanguageSkill:React.FC<LangSkillProps> = ({ language, level }) => {
  const [levelNumber, setLevelNumber] = useState(0);
  const [colorPercentage, setColorPercentage] = useState(0);

  useEffect(() => {
    const ordersCount = levelsArray.length;
    const order = levelsArray.indexOf(level) + 1;
    if (!level) setLevelNumber(0);
    else setLevelNumber(order);
    setColorPercentage(100 - ((ordersCount - order) * 12.5));
  }, [level, setLevelNumber]);

  return (
    <Grid
      container
      sx={{
        backgroundColor: mainStyles.backgroundColor1,
        height: "50px",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        pl: "25px",
        my: "20px",
        border: `0.5px solid ${mainStyles.textColor1}`,
        borderRadius: "10px",
        backgroundImage: `linear-gradient(left, ${mainStyles.borderColor1}, ${mainStyles.borderColor1} ${colorPercentage}%, transparent ${colorPercentage}%, transparent 100%)`,
        width: "100%",
      }}>
      <Grid
        item
        width="auto"
        sx={{
          height: { xs: "50%", md: "100%" },
          display: "flex",
          alignItems: "center"
        }}>
        <Typography
          color={mainStyles.textColor1}
          variant="h6"
          fontWeight={900}>
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
          height: { xs: "50%", md: "100%" }
        }}>
        {levelsArray.map((lvl, key) => (
          <Typography
            key={key}
            fontWeight={900}
            sx={{
              color: levelNumber > levelsArray.indexOf(lvl) ? mainStyles.textColor2 : mainStyles.textColor1,
              transition: "0.5s",
            }}
          >
            {lvl}
          </Typography>))}
      </Grid>
    </Grid>
  );
};

export default LanguageSkill;