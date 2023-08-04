import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

import mainStyles from "../../../styles/main.scss";
import { useEffect } from 'react';

const pages = ['Main', 'Portfolio', 'Contacts' ];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [zerosAndOnes, setZerosAndOnes] = React.useState();
  const marquee = React.useRef();
  const zerosAndOnesRef = React.useRef([]);
  const randomBitsInt = React.useRef(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    setTimeout(() => {
      marquee.current = document.querySelectorAll(".marquee");
    }, 1500);
     randomBitsInt.current =  setInterval(() => {
       const random =  Math.round(Math.random());
       if (zerosAndOnesRef.current.lenght > 160) {
        clearInterval(randomBitsInt.current);
        return;
       }
       zerosAndOnesRef.current.push(random);
       setZerosAndOnes([...zerosAndOnesRef.current]);
     }, 1000);
  }, []);

  return (
    <>
     <Box
     sx={{
      height: "125px",
      position: "fixed",
      width: "100%",
      zIndex: 5
     }}>
      <AppBar 
         position="static"
        sx={{
          m: 0,
          backgroundColor: mainStyles.backgroundColor2,
          height: "100px",
          padding: "0px"
        }}>
        <Container maxWidth="xl" sx={{
          height: "100%"
        }}>
          <Toolbar disableGutters sx={{
            height: "100%",
          }}>
            <Link to="/">
              <img 
                src="/logo.png"
                alt="My Portfolio" style={{
                height: "100px",
                width: "120px"
              }} />
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: "flex-end" }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{
                  color: mainStyles.textColor2
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  marginLeft: "auto",
                  padding: 0,
                  display: { xs: 'block', md: 'none' },
                }}
                MenuListProps={{
                  sx: {
                    padding: 0,
                    backgroundColor: mainStyles.textColor2
                  }
                }}
              >
                {pages.map((page, index) => (
                    <Link  to={page === "Main" ? "/" : `/${page.toLowerCase()}`}
                    underline="none"
                    key={index}
                    style={{
                      textDecoration: "none",
                    }}>
                    <MenuItem 
                      key={page} 
                      onClick={handleCloseNavMenu}
                      sx={{
                        backgroundColor: mainStyles.textColor2,
                        width: "150px",
                        "&:hover": {
                          backgroundColor: mainStyles.backgroundColor2,
                          transition: "0.2s",
                          boxSizing: "border-box",
                          border: `0.25px solid ${mainStyles.borderColor1}`,
                          "& .MuiTouchRipple-root": {
                            display: "none"
                          }
                        }
                      }}>  
                        <Typography 
                          textAlign="center"
                          sx={{
                            color: mainStyles.textColor1,
                            fontSize: "17px"
                        }}>{page}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
            <Box 
              sx={{ flexGrow: 1,
                    height: "100%",
                    marginLeft: '25px',
                    display: { xs: 'none', md: 'flex' },
                    }}>
              {pages.map((page, index) => (
                <Link
                  to={page === "Main" ? "/" : `/${page.toLowerCase()}`}
                  underline="none"
                  key={index}
                  style={{
                    textDecoration: "none"
                  }} >
                    <Button
                      key={page}
                      className="menu-button"
                      onClick={handleCloseNavMenu}
                      sx={{
                        fontFamily: "'Pacifico', cursive;",
                        px: 2,
                        height: "100%",
                        textDecoration: "none",
                        display: 'block',
                        color: mainStyles.textColor2,
                        textShadow: "0 0 10px #FFFFFF",
                       }}
                    >    
                    <motion.p
                     className="menu_item_text"
                     whileHover={{
                      transform: ["rotateZ(10deg)", "rotateZ(-10deg)", "rotateZ(10deg)"],
                      transition: {
                        duration: 1
                      }
                     }}>
                      {page === "Contacts" ? "Contact me" : page}
                    </motion.p>
                    </Button>
                  </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
      sx={{
        height: "25px",
      }}>
        <Marquee
        direction='right'
        loop={false}
        speed={100}
        children={zerosAndOnes}
        style={{
          backgroundColor: mainStyles.textColor1,
          opacity: 0.85,
          color: mainStyles.textColor2,
          height: "100%"
        }}>
        </Marquee>
      </Box>
   </Box>
   <Box height="120px" sx={{mb: "25px"}}></Box>
   </>
  );
};
export default ResponsiveAppBar;