import React , { useEffect, useState, useRef} from "react";
import {Avatar, Box,  Grid} from "@mui/material";
import { Typewriter } from 'react-simple-typewriter';
import axios from "axios";

import mainStyles from "../../../../styles/main.scss";

function About() {
    const mainBox = useRef();
    const [info, setInfo] = useState({data: "..."});

    useEffect(() => {
      setInfo(false)
       setTimeout(() => {
         mainBox.current.style.top = "0px";
       }, 1000);
      //  axios.get("/getData:about").then((res) => {
      //   console.log(res.data)
      //   setInfo(res.data[0]);
      // });
    }, []);

    useEffect(() => {
      if(!info.link) {
        axios.get("/getData:about").then((res) => {
          console.log(res.data)
          setInfo(res.data[0]);
        });
      };
    });

    return (
        <Box
          ref = {mainBox}
          sx={{
            width: "80%",
            padding: "15px",
            margin: "0px auto",
            justifySelf: "center",
            boxShadow: mainStyles.mainShadow,
            backgroundColor: mainStyles.backgroundColor2,
            transition: "0.5s",
            position: "relative",
            top: "-2500px",
            height: {xs: "400px", md: "335px"}
          }}>
            <Grid container 
              sx={{
                justifyContent: 'space-between',
                height: {xs: "auto" , md: "100%"},
                flexDirection: {xs: "column", md: "row"}
              }}>
                <Grid item sx={{
                   width: {xs: "100%", md: "30%"},
                   height: {xs: "50%", md: "100%"},
                   paddingRight: "15px",
                   display: "flex",
                   alignItems: "flex-end",
                   justifyContent: "center"
                }}>
                  <Avatar
                   src={info.link} 
                   sx={{
                    width:{xs:"200px", md: "250px"},
                    height: {xs: "240px" ,md: "300px"},
                    borderRadius: "0px",
                    transition: "1s",
                    "&:hover" : {
                      filter: "grayscale(0%)",
                    }
                   }}
                  />
                </Grid>
                <Grid item sx={{
                   width: {xs: "100%", md: "70%"},
                   fontSize: {xs: "13px", sm: "16px", md: "20px"},
                   height: {xs: "50%", md: "100%"},
                   pt: {xs: "15px", md: 0},
                   color: mainStyles.textColor2,
                   display: "flex",
                   alignItems: "center",
                }}>
                  {info.link ?
                  <Typewriter 
                    words={[info.data]}
                    typeSpeed={4}
                    /> 
                    : null}
                </Grid>
            </Grid>
        </Box>
    );
};

export default About;