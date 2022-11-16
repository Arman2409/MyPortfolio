import React , { useEffect, useState, useRef} from "react";
import {Avatar, Box,  Grid} from "@mui/material";
import { Typewriter } from 'react-simple-typewriter';
import axios from "axios";

import mainStyles from "../../../../styles/main.scss";

function About() {
    const mainBox = useRef();
    const [info, setInfo] = useState("");
    const infoRef = useRef({});

    useEffect(() => {
       setTimeout(() => {
         mainBox.current.style.top = "0px";
       }, 1000);
      return setInfo(false);
    }, []);

    useEffect(() => {
      if(!info) {
        axios.get("/getData:about").then((res) => {
          setInfo(true);
          infoRef.current = res.data[0];
          console.log(res.data[0]);
        });
      };
    });

    return (
        <Box
          ref = {mainBox}
          sx={{
            width: "80%",
            padding: "15px",
            margin: "0 auto",
            justifySelf: "center",
            boxShadow: mainStyles.mainShadow,
            backgroundColor: mainStyles.backgroundColor2,
            transition: "0.5s",
            position: "relative",
            top: "-2500px",
            height: "400px"
          }}>
            <Grid container 
              sx={{
                justifyContent: 'space-between',
                height: {xs: "auto" , md: "100%"},
                flexDirection: {xs: "column", md: "row"}
              }}>
                <Grid item sx={{
                   width: {xs: "100%", md: "50%"},
                   height: {xs: "50%", md: "100%"},
                   paddingRight: "15px"
                }}>
                  <Avatar
                   src={infoRef.current.link} 
                   sx={{
                    width:{xs:"180px", md: "100%"},
                    height: {xs: "180px" ,md: "100%"},
                    borderRadius: "0px",
                    filter: "grayscale(100%)",
                    transition: "1s",
                    "&:hover" : {
                      filter: "grayscale(0%)",
                    }
                   }}
                  />
                </Grid>
                <Grid item sx={{
                   width: {xs: "100%", md: "50%"},
                   fontSize: {xs: "13px", sm: "16px", md: "20px"},
                   height: {xs: "50%", md: "100%"},
                   pt: {xs: "15px", md: 0},
                   color: mainStyles.textColor2
                }}>
                  {info ? 
                  <Typewriter 
                    words={[infoRef.current.data]}
                    typeSpeed={4}
                    /> :  <Typewriter 
                    words={["...."]}
                    typeSpeed={4}
                    /> }
                </Grid>
            </Grid>
        </Box>
    );
};

export default About;