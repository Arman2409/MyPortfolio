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

import mainStyles from "../../../styles/main.scss";
import { useEffect } from 'react';

const pages = ['Main', 'Portfolio', 'About', 'Contacts' ];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [zerosAndOnes, setZerosAndOnes] = React.useState("");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
     const marquee = document.querySelector(".marquee");
     console.log(marquee);
     setInterval(() => {
       const random =  Math.round(Math.random());
       console.log(random);
       marquee.appendChild(random);
     }, 1000);
  }, []);

  return (
     <Box
     sx={{
      height: "120px",
     }}>
      <AppBar 
         position="static"
        sx={{
          m: 0,
          // marginBottom: '25px',
          backgroundColor: mainStyles.backgroundColor2,
          height: "100px"
        }}>
        <Container maxWidth="xl" sx={{
          height: "100%"
        }}>
          <Toolbar disableGutters sx={{
            height: "100%"
          }}>
            <Link to="/">
              <img src="/LogoColor.png" style={{
                height: "100px",
                width: "100px"
              }}></img>
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
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
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <Link to="/">
                  <img src="/LogoColor.png" style={{
                      height: "100px",
                      width: "100px"
                    }}></img> 
              </Link>
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box 
              sx={{ flexGrow: 1,
                    height: "100%",
                    marginLeft: '25px',
                    display: { xs: 'none', md: 'flex' },
                    "&:hover .menu-button": {
                      transition: "0.2s",
                      px: "40px"
                    } }}>
              {pages.map((page) => (
                <Link
                  to={page == "Main" ? "/" : `/${page.toLowerCase()}`}
                  underline="none"
                  style={{
                    textDecoration: "none"
                  }} >
                    <Button
                      key={page}
                      className="menu-button"
                      onClick={handleCloseNavMenu}
                      sx={{ px: 2, color: 'white', height: "100%", textDecoration: "none", display: 'block', color: mainStyles.textColor2 }}
                    >    
                        {page}
                    </Button>
                  </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
      sx={{
        height: "20px",
      }}>
        <Marquee
        direction='right'
        // className='marquee-cont'
        loop={false}
        speed={100}
        style={{
          backgroundColor: mainStyles.textColor1,
          color: mainStyles.textColor2,
          height: "100%"
        }}>
          
        </Marquee>
      </Box>
   </Box>
  );
};
export default ResponsiveAppBar;