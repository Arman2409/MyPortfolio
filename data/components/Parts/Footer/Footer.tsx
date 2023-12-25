import { Typography, Box, Link} from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';

import mainStyles from "../../../styles/main.scss";

const Footer = () => {
    return(
        <Box
          sx={{
            display: "flex",
            position: "absolute",
            bottom: 0,
            width: "100%",
            justifyContent: "flex-start",
            flexDirection: "column",
            alignItems: "center",
            height: "auto",
            backgroundColor: mainStyles.backgroundColor2
          }}>
            <Box sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "20px"
            }}>
              <Link 
                href="malto:armanghazaryan2409@gmail.com"
                underline="none">
                <Typography
                  variant={"p" as any}
                  color={mainStyles.textColor1}>
                  armanghazaryan2409@gmail.com
                </Typography>
              </Link>
              <Link 
                href="tel:armanghazaryan2409@gmail.com"
                underline="none">
                <Typography
                  variant={"p" as any}
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
                <Typography sx={{
                  marginLeft: "10px"
                }}>
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