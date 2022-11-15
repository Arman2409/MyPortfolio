import React , { useEffect, useRef} from "react";
import {Avatar, Box,  Grid} from "@mui/material";
import { Typewriter } from 'react-simple-typewriter'

import mainStyles from "../../../../styles/main.scss";

function About() {
    const mainBox = useRef();

    useEffect(() => {
       setTimeout(() => {
        mainBox.current.style.top = "0px";
       }, 1000)
    }, []);

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
                   height: {xs: "50%", md: "100%"}
                }}>
                  <Avatar
                   src="https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=" 
                   sx={{
                    width:{xs:"150px", md: "100%"},
                    height: {xs: "150px" ,md: "100%"},
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
                   fontSize: {xs: "13px", sm: "15px", md: "18px"},
                   height: {xs: "50%", md: "100%"},
                   color: mainStyles.textColor2
                }}>
                  <Typewriter 
                    words={[" Hello, my name is Arman.I am twenty years old.I am a full stack JavaScript developer.I can use React.js and Node.js frameworks of JavaScript.I have about 6 months of experience.I went to a practice to Global IT for 2 months,worked as React.js developer for two months and worked as full stack developer for 3 months in OnGrid.My programming skills also include HTML, CSS, SCSS, jQuery, Material UI, Redux Toolkit, Express.js, MongoDB, PostgreSQL, Docker, Docker Compose."]}
                    typeSpeed={4}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default About