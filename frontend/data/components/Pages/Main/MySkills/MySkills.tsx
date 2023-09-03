import { Box, Typography, useMediaQuery } from "@mui/material";
import { useRef, useState } from "react";
import { useEffect } from "react";

import mainStyles from "../../../../styles/main.scss";
import Demo from "../../../Parts/Demo/Demo";
import Skill from "./components/Skill";
import { getDimesions, getResponsiveSizes } from "./utils/functions";
import { fetchData } from "../../../../API/fetchData";
import { SkillProps } from "../../../../types/propTypes";

const MySkills = () => {
  const mainCont = useRef<any>(null);
  const [skills, setSkills] = useState<any[]>([]);
  const [demoState, setDemoState] = useState<boolean>(true);
  const [dimensionsArr, setDimensionsArr] = useState<any[]>([]);

  const isVeryLarge = useMediaQuery("(max-width:1600px)");
  const isExtraLarge = useMediaQuery("(max-width:1350px)");
  const isLarge = useMediaQuery("(max-width:1100px)");
  const isMedium = useMediaQuery("(max-width:800px)");
  const isSmall = useMediaQuery("(max-width:500px)");

  useEffect(() => {
    setTimeout(() => {
      mainCont.current.style.top = "0px";
    }, 1000)
    setDemoState(true);
    fetchData("getData", "skills").then((res: any[]) => {
      setSkills(res);
      setDemoState(false);
      const { width, height, radius } = getResponsiveSizes(isSmall, isMedium, isLarge, isExtraLarge, isVeryLarge);
      const dimsArr = getDimesions([0, width], [radius, height - 2 * radius], radius, res.length);
      setDimensionsArr(dimsArr);
    }).catch((errorMsg:string) => console.error(errorMsg))
  }, [setSkills, isSmall, isMedium, isLarge, isExtraLarge, isVeryLarge]);

  useEffect(() => {
      const { width, height, radius } = getResponsiveSizes(isSmall, isMedium, isLarge, isExtraLarge, isVeryLarge);
      const dimsArr = getDimesions([0, width], [radius, height - 2 * radius], radius, skills.length);
      setDimensionsArr(dimsArr);
  }, [isSmall, isMedium, isLarge, skills, isExtraLarge, isVeryLarge])

  return (
    <Box
      ref={mainCont}
      sx={{
        transition: "0.5s",
        position: "relative",
        top: "-2500px",
        width: isSmall || isMedium || isLarge ? "100%" : "calc(80% + 40px)",
        height: isSmall ? 1200 : isMedium ? 1000 : 800 + "px",
        marginTop: "50px",
      }}>
      <Demo state={demoState} />
      <Typography
        variant="h4"
        color={mainStyles.textColor1}
        fontFamily={"'Pacifico', cursive;"}
        sx={{
          fontSize: "34.5px",
          boxShadow: mainStyles.mainShadow,
          textAlign: "center",
          lineHeight: "70px",
          margin: "0 auto",
          width: isSmall ? "100%" : isMedium ? "80%" : "100%",
          backgroundColor: mainStyles.backgroundColor2,
        }}>
        My Technical Skills
      </Typography>
      {dimensionsArr.length && skills.map((elem: SkillProps, index: number) => {
        const zIndex = Math.random() * 3;
        return <Skill key={index} zIndex={zIndex} top={dimensionsArr[index].y} left={dimensionsArr[index].x} source={elem.source} percentage={elem.percentage} />
      }
      )}
    </Box>
  )
}

export default MySkills;