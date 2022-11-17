import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Grid, Box, Link } from '@mui/material';
import { useEffect } from 'react';
import axios from 'axios';
import { useRef } from 'react';
import { useState } from 'react';

import mainStyles from "../../../styles/main.scss";

function Portfolio() {
  const mainBox = useRef(null);
  const [itemData, setItemData] = useState([]);

  function clickInfo(item) {
    const subtitles = document.querySelectorAll('.MuiImageListItemBar-subtitle');
    subtitles.forEach((elem) => {
      elem.innerHTML = "";
    });
    const elemIndex = item.id - 1;
     subtitles[elemIndex].innerHTML = item.description;
  };

  useEffect(() => {
    window.scrollTo({top: 0});
    setTimeout(() => {
      mainBox.current.style.top = "0px";
    }, 1000);
    axios.get("/getData:portfolio").then((res) => {
     setItemData(res.data);
    });
    setTimeout(() => {
      const bars = document.querySelectorAll(".MuiImageListItemBar-title");
      const barSubtitles = document.querySelectorAll(".MuiImageListItemBar-subtitle");
      bars.forEach((elem) => {
       elem.style.color = mainStyles.textColor1;
       elem.style.fontWeight = "900";
       elem.style.textShadow = "1px 0px 1px #CCCCCC, 0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE, 4px 3px 1px #CCCCCC, 3px 4px 1px #EEEEEE, 5px 4px 1px #CCCCCC, 4px 5px 1px #EEEEEE, 6px 5px 1px #CCCCCC, 5px 6px 1px #EEEEEE, 7px 6px 1px #CCCCCC"
      });
      barSubtitles.forEach((elem) => {
       elem.style.color = mainStyles.textColor2;
      });
    }, 1000);
  }, []);

  return (
    <Box
     sx={{
      height: {xs: "500px", sm: "700px", md: "900px", lg: "1100px"},
     }}>
      <Box 
        ref={mainBox}
        sx={{
          backgroundColor: mainStyles.backgroundColor2,
          boxShadow: mainStyles.mainShadow,
          padding: "20px",
          transition: "0.5s",
          width: "80%",
          position: "relative",
          top: "-2500px",
          margin: "0px auto",
          height: "auto",
          mt: "75px",
        }}>
        <ImageList sx={{ width: 'auto', height: 'auto', overflow: "visible" }}>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader 
            component="div" 
            sx={{fontSize: '35px',
                  marginBottom: "15px",
                  fontFamily: "'Pacifico', cursive;",
                  textAlign: "center",
                  backgroundColor: mainStyles.backgroundColor2,
                  color: mainStyles.textColor1}}>
              My Portfolo
            </ListSubheader>
          </ImageListItem>
          {itemData.length > 0 ? itemData.map((item) => (
            <ImageListItem
              key={item.id}
              sx={{
                 boxSizing: "content-box",
                '&:hover': {border: `7px solid ${mainStyles.borderColor2}`},
                 height: {xs: "125px", md: "auto"}
                }}>
              <img
                src={`${item.img}`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                className={`itemBar-${item.id}`}
                title={item.title}
                onClick={() => clickInfo(item)}
                subtitle="..."
                sx={{
                  "& .MuiImageListItemBar-title": {
                    fontSize: {xs: "13px", sm: "16px", md: "18px"}
                  },
                  "& .MuiImageListItemBar-subtitle": {
                    fontSize: {xs: "9.5px", sm: "14.5px", md: "17px"},
                    maxWidth: {xs: "95%", md: "auto"}
                  },
                  "& .MuiImageListItemBar-titleWrap": {
                    width: {xs: "90%", md: "auto"}
                  },
                  opacity: 1,
                  height: {xs: "100%", md: "50px" },
                  flexDirection: {xs : "column", md: "row"}
                }}
                actionIcon={
                  <Grid container >
                    {item.description ? 
                    <Grid 
                      item 
                      className='button-wrapper' >
                        <IconButton
                          sx={{ color: 'rgba(255, 255, 255, 0.54)',
                              }}
                          aria-label={`info about ${item.title}`}
                        >
                          <InfoIcon sx={{
                             fontSize: {xs: "16px", md: "18px"}
                          }}/>
                        </IconButton>
                      </Grid>
                      : null }
                      {item.link ? 
                      <Grid  item>
                        <Link href={`${item.link}`} target="_blank">
                          <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`info about ${item.title}`}
                          >
                            <OpenInNewIcon sx={{
                               fontSize: {xs: "16px", md: "18px"}
                             }}/>
                          </IconButton >
                        </Link>
                      </Grid>
                      : null }
                    </Grid>
                }
              />
            </ImageListItem>
          )) : null}
        </ImageList>
      </Box>
    </Box>
  );
}


export default Portfolio;