import React, { useState } from "react";
import { Box, TextField , Container, Typography, Button} from "@mui/material";
import axios from "axios";

import mainStyles from "../../../styles/main.scss";

function Contacts() {
   const [message,setMessage] = useState("");

   function submitMessage(e) {
      e.preventDefault();
      const form = new FormData(e.target);
      const data = Object.fromEntries(form);
      axios.post("/getMessage", data).then((res) => {
         console.log(res);
         if(res.data.message) {
           setMessage(res.data.message);
         }
      })
   }

    return (
        <Box>
           <Container
             component="form"
             onSubmit={submitMessage}
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
                  color={mainStyles.textColor1}
                >
                    Contact me
                </Typography>
                <TextField 
                 required
                 name="name"
                 placeholder="Your name" 
                 sx={{
                    width: "80%",
                    backgroundColor: mainStyles.textColor2,
                    border: `1px solid ${mainStyles.borderColor2}`,
                 }}/>
                <TextField 
                 required
                 type={"email"} 
                 name="email"
                 placeholder="Your email" 
                 sx={{
                    width: "80%",
                    backgroundColor: mainStyles.textColor2,
                    border: `1px solid ${mainStyles.borderColor2}`,
                 }}/>
                <TextField 
                 required
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
                     <Typography
                     color={message == "Message sent" ? "green" : "orangered"}
                     >
                      {message}
                     </Typography>
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