import { BottomNavigation, IconButton, Typography, Box, Link} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import CopyrightIcon from '@mui/icons-material/Copyright';

import mainStyles from "../../../styles/main.scss";


function Footer() {
    return(
        <Box
          sx={{
            marginTop: '25px',
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            alignItems: "center",
            height: "auto",
            backgroundColor: mainStyles.backgroundColor2
          }}>
            <Box>
              <IconButton 
                href="https://linkedin.com" 
                target="_blank">
                  <LinkedInIcon sx={{
                    color: mainStyles.textColor2,
                    fontSize: "30px",
                  }} />
              </IconButton>
                <IconButton 
                  href="https://facebook.com" 
                  target="_blank">
                  <FacebookIcon sx={{
                    color: mainStyles.textColor2,
                    fontSize: "30px",
                  }} />
              </IconButton>
            </Box>
            <Box sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}>
              <Link 
                href="malto:armanghazaryan2409@gmail.com"
                underline="none">
                <Typography
                  variant="p"
                  color={mainStyles.textColor1}>
                  armanghazaryan2409@gmail.com
                </Typography>
              </Link>
              <Link 
                href="tel:armanghazaryan2409@gmail.com"
                underline="none">
                <Typography
                  variant="p"
                  fontSize="11px"
                  color={mainStyles.textColor1}>
                  +37496503823
                </Typography>
              </Link>
            </Box>
            <Box
             sx={{
              display: "flex",
              color: mainStyles.textColor2,
              mb: "15px"
             }}>
                <Typography >
                Copyright
                </Typography>
                  <CopyrightIcon sx={{m: "0 7px"}}/>
                  <Typography>
                Ghazaryan Arman 2022 All rights reserved
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer;