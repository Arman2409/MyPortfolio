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

import mainStyles from "../../../styles/main.scss";
import { useRef } from 'react';


const itemData = [
  {
    id: 1,
    img: '/images/smartClick.png',
    title: 'SmartTouch',
    description: "An experimental online shop.",
    link: 'https://smarttouchapp.herokuapp.com'
  },
  {
    id: 2,
    img: '/images/NowPhotography.png',
    title: 'NOW Photography',
    description: "An experimental photography website.",
    link: 'https://now-photography.netlify.app/'
  },
  {
    id: 3,
    img: '/images/Clock.png',
    title: 'Clock animation',
    description: "Clock animation with CSS",
    link: 'https://comforting-semifreddo-6266c2.netlify.app/'
  },
  {
    id: 4,
    img: '/images/Neuron.png',
    title: 'Neuron animation',
    description: "Neuron animation with CSS",
    link: 'https://famous-mooncake-6e542c.netlify.app/'
  },
];

function Portfolio() {
  const mainBox = useRef(null);

  function clickInfo(item) {
    const subtitles = document.querySelectorAll('.MuiImageListItemBar-subtitle');
    const elemIndex = item.id - 1;
    if (subtitles[elemIndex].innerHTML == "") {
     subtitles[elemIndex].innerHTML = item.description;
    } 
    else {
      subtitles[elemIndex].innerHTML='';
    };
  };

  useEffect(() => {
     const subtitles = document.querySelectorAll('.MuiImageListItemBar-subtitle');
      subtitles.forEach((elem) => {
        elem.innerHTML = '';
      });
      setTimeout(() => {
        mainBox.current.style.top = "0px";
      }, 1000);
     const bars = document.querySelectorAll(".MuiImageListItemBar-title");
     const barSubtitles = document.querySelectorAll(".MuiImageListItemBar-subtitle");
     bars.forEach((elem) => {
      elem.style.color = mainStyles.textColor1;
     });
     barSubtitles.forEach((elem) => {
      elem.style.color = mainStyles.textColor2;
     });
     window.scrollTo({top: 0});
  }, [])

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
          mt: "75px",
        }}>
        <ImageList sx={{ width: 'auto', height: 'auto' }}>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader 
            component="div" 
            sx={{fontSize: '35px',
                  marginBottom: "15px",
                  fontFamily: "'Pacifico', cursive;",
                  textAlign: "center",
                  backgroundColor: mainStyles.backgroundColor2,
                  color: mainStyles.textColor1}}>
              My Portfolio
            </ListSubheader>
          </ImageListItem>
          {itemData.map((item) => (
            <ImageListItem
              key={item.id}
              sx={{
                 boxSizing: "content-box",
                '&:hover': {border: `7px solid ${mainStyles.borderColor2}`},
                 height: {xs: "125px", md: "auto"}
                }}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
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
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}


export default Portfolio;