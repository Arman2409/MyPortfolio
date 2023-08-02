import * as React from 'react';
import { useRef,useState, useEffect } from "react";
import { Box, useMediaQuery } from '@mui/material';
import axios from 'axios';

import mainStyles from "../../../styles/main.scss";
import PortfolioItem from './PortfolioItem/PortfolioItem';

function Portfolio() {
  const mainBox = useRef(null);
  const [itemData, setItemData] = useState([]);
  const isMedium = useMediaQuery("(max-width:1100px)");
  const isSmall = useMediaQuery("(max-width:500px)");

  useEffect(() => {
    window.scrollTo({top: 0});
    setTimeout(() => {
      mainBox.current.style.top = "0px";
    }, 1000);
    axios.get("/getData:portfolio").then((res) => {
    let newData = res.data.map((elem, index) => {
      const newElem = elem;
      newElem.index = index;
      return newElem;
    });
     newData = newData.sort((prev, next) => prev.id - next.id);
     if (newData.length > 6) {
       newData = newData.splice(0, 6);
     }
     setItemData(newData);
    });
  }, [setItemData, axios]);

  return (
    <Box
     sx={{
      height: isSmall ? itemData.length * 280 + "px" : isMedium ? itemData.length * 200 + "px" : "500px",
      width: "100%",
      display: "flex",
      justifyContent: "center"
     }}>
      <Box 
        ref={mainBox}
        sx={{
          transition: "0.5s",
          maxWidth: "100%",
          width: isSmall ? "180px" : isMedium ? "500px" : itemData.length * 175 + "px",
          height: "0",
          position: "absolute",
          top: "-2500px",
          margin: "50px auto",
        }}>
           {itemData.map(({img, title, link, description}, index) => {
              let left;
                 if (isSmall) {
                    left = 0
                } else if(isMedium) {
                  if(Number.isInteger(index/2)) {
                    left = 0;
                  } else {
                    left = 150;
                  }
                } else  {
                  if (index === 0) {
                    left = 0;
                  } else {
                    left = index * 150;                    
                  }
                }              
              let top;
              if (isSmall) {
                if(index === 0) {
                  top = 75;
                } else {
                  top = index * 280 + 75
                }
              } else if(isMedium) {
                top = index * 145
              } else {
                if(Number.isInteger(index/2)) {
                  top = 0
                } else {
                  top = 145
                }
              }
              console.log({left15: left});
              return  <PortfolioItem 
                         url={img} 
                         key={index}
                         description={description} 
                         link={link} 
                         left={left} 
                         top={top}/>
          } )}
            
      </Box>
     </Box>
  );
}


export default Portfolio;