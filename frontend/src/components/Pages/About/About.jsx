import React , { useEffect, useRef} from "react";
import {Box, Container, Grid} from "@mui/material";

import mainStyles from "../../../styles/main.scss";

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
            margin: "0 auto",
            justifySelf: "center",
            boxShadow: mainStyles.mainShadow,
            backgroundColor: mainStyles.backgroundColor2,
            transition: "0.5s",
            position: "relative",
            top: "-2500px",
          }}>
            <Grid container 
              sx={{
                justifyContent: 'space-between'
              }}>
                <Grid item sx={{
                   width: '50%',
                }}>
                  <img src="https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=" />
                </Grid>
                <Grid item sx={{
                   width: '50%',
                }}>
                    Hello everyone, it's me, my name is Arman, bla lblallcdpcdcpd 
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                     magnam fugiat corrupti pariatur dolorem nulla natus velit earum 
                     reiciendis, expedita nobis error ipsa nemo repu
                    diandae quis, consectetur tempora quaerat? Nostrum.
                    Hello everyone, it's me, my name is Arman, bla lblallcdpcdcpd 
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                     magnam fugiat corrupti pariatur dolorem nulla natus velit earum 
                     reiciendis, expedita nobis error ipsa nemo repu
                    diandae quis, consectetur tempora quaerat? Nostrum.
                </Grid>
            </Grid>
        </Box>
    )
}

export default About