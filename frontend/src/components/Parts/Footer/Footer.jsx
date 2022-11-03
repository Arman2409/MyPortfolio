import { BottomNavigation, IconButton} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

import mainStyles from "../../../styles/main.scss";


function Footer() {
    return(
        <BottomNavigation 
          sx={{
            marginTop: '25px',
            backgroundColor: mainStyles.backgroundColor2
          }}>
            <IconButton href="https://linkedin.com" target="_blank">
                <LinkedInIcon />
            </IconButton>
              <IconButton href="https://facebook.com" target="_blank">
                <FacebookIcon />
            </IconButton>
        </BottomNavigation>
    )
}

export default Footer;