import React from "react";
import { Box, TextField , Container, Typography, Button, LinearProgress} from "@mui/material";

import mainStyles from "../../../styles/main.scss";

function Contacts() {
    return (
        <Box>
           <Container
             component="form"
             sx={{
                border: `1px solid ${mainStyles.borderColor1}`,
                padding: "20px",
                display: "flex",
                height: "500px",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
                backgroundColor: mainStyles.backgroundColor2,
                boxShadow: mainStyles.mainShadow
             }}>
                <Typography 
                  variant="h3"
                >
                    Contact me
                </Typography>
                <TextField 
                 name="name"
                 placeholder="Your name" 
                 sx={{
                    width: "80%",
                    backgroundColor: mainStyles.textColor2,
                    border: `1px solid ${mainStyles.borderColor2}`,
                 }}/>
                <TextField 
                 type={"email"} 
                 name="email"
                 sx={{
                    width: "80%",
                    backgroundColor: mainStyles.textColor2,
                    border: `1px solid ${mainStyles.borderColor2}`,
                 }}/>
                <TextField 
                 multiline
                 rows={5}
                 maxRows={10}
                 name="message"
                 placeholder="Your message"
                 sx={{
                    width: "80%",
                    backgroundColor: mainStyles.textColor2,
                    border: `1px solid ${mainStyles.borderColor2}`,
                 }}
                 />
                 <Box
                  sx={{
                    width: "80%",
                    height: "36.5px",
                    position: "relative"}}>
                    <Button 
                    variant="contained"
                    type="submit"
                    sx={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                        backgroundColor: mainStyles.backgroundColor1,
                        opacity: 1
                    }}>
                        Submit
                     </Button>
                 </Box>
           </Container>
        </Box>
    )
}

export default Contacts;