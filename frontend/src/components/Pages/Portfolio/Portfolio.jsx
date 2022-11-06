import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Container, Grid, Box, Link } from '@mui/material';
import { useEffect } from 'react';

import mainStyles from "../../../styles/main.scss";
import { useRef } from 'react';

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
    }
  }

  useEffect(() => {
     const subtitles = document.querySelectorAll('.MuiImageListItemBar-subtitle');
      subtitles.forEach((elem) => {
        elem.innerHTML = '';
      })
      setTimeout(() => {
        mainBox.current.style.top = "0px";
      }, 1000)
     const bars = document.querySelectorAll(".MuiImageListItemBar-title");
     const barSubtitles = document.querySelectorAll(".MuiImageListItemBar-subtitle");
     bars.forEach((elem, index) => {
      elem.style.color = mainStyles.textColor1;
     })
     barSubtitles.forEach((elem, index) => {
      elem.style.color = mainStyles.textColor2;
     })
  }, [])

  return (
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
        margin: "0 auto",
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
            key={item.img}
            sx={{
              '&:hover': {border: `7px solid ${mainStyles.borderColor2}`}
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
              actionIcon={
                <Grid container>
                  {item.description ? 
                  <Grid item className='button-wrapper' >
                      <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`info about ${item.title}`}
                      >
                        <InfoIcon />
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
                          <OpenInNewIcon />
                        </IconButton>
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
  );
}

const itemData = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    link: "",
    description: "vvfvfd",
    link: 'https://facebook.com'
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    link: "",
    description: "vfededdw",
    link: 'https://facebook.com'
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    link: "",
    description: "xxxxxxxxx",
    link: 'https://facebook.com'
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    link: "",
    description: "",
    link: 'https://facebook.com'
  },
];

export default Portfolio;