import { useState, useRef, useEffect } from "react";
import { Box, TextField, Container, Typography, Button } from "@mui/material";
import axios from "axios";

import mainStyles from "../../../styles/main.scss";

function Contacts() {
   const [message, setMessage] = useState<string>("");
   const [dotCount, setDotCount] = useState<number>(0);
   const mainBox = useRef<any>(null);
   const dotsInterval = useRef<any>(null);

   function submitMessage(e:Event) {
      e.preventDefault();
      const form = new FormData(e.target as HTMLFormElement);
      const data = Object.fromEntries(form);
      axios.post("/sendMessage", data).then((res) => {
         if (res.data.message) {
            setMessage(res.data.message);
         }
      })
   }

   useEffect(() => {
      setTimeout(() => {
         mainBox.current.style.top = "0px";
      }, 1000);
      window.scrollTo({ top: 0 });
      dotsInterval.current = setInterval(() => {
         setDotCount(current => {
            if (current === 5) {
               return 1;
            }
            return current + 1;
         })
      }, 750)
   }, [setDotCount])

   useEffect(() => {
      return () => clearInterval(dotsInterval.current);
   }, [])

   return (
      <Container
         component="form"
         onSubmit={submitMessage as any}
         ref={mainBox}
         sx={{
            border: `1px solid ${mainStyles.borderColor1}`,
            padding: "20px",
            display: "flex",
            height: "500px",
            width: "80%",
            transition: "0.5s",
            position: "relative",
            top: "-2500px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            backgroundColor: mainStyles.backgroundColor2,
            boxShadow: mainStyles.mainShadow
         }}>
         <Typography
            variant="h3"
            fontFamily={"'Pacifico', cursive;"}
            color={mainStyles.textColor1}
         >
            Contact me
         </Typography>
         <TextField
            required
            name="name"
            placeholder={"Your name" + ".".repeat(dotCount)}
            sx={{
               width: "80%",
               backgroundColor: mainStyles.backgroundColor1,
               border: `1px solid ${mainStyles.borderColor2}`,
               "& input": {
                  color: true ? mainStyles.textColor1 : null,
               },
               "& input::placeholder": {
                  opacity: 1,
                  fontWeight: 900
               }
            }}
         />
         <TextField
            required
            type={"email"}
            name="email"
            placeholder={"Your email" + ".".repeat(dotCount)}
            sx={{
               width: "80%",
               backgroundColor: mainStyles.backgroundColor1,
               border: `1px solid ${mainStyles.borderColor2}`,
               "& input": {
                  color: true ? mainStyles.textColor1 : null,
               },
               "& input::placeholder": {
                  opacity: 1,
                  fontWeight: 900
               }
            }} />
         <TextField
            required
            multiline
            rows={5}
            maxRows={10}
            inputProps={{ style: { color: mainStyles.textColor1 } }}
            name="message"
            placeholder={"Your message" + ".".repeat(dotCount)}
            sx={{
               width: "80%",
               backgroundColor: mainStyles.backgroundColor1,
               border: `1px solid ${mainStyles.borderColor2}`,
               "& textarea": {
                  color: true ? mainStyles.textColor1 : null,
               },
               "& textarea::placeholder": {
                  opacity: 1,
                  fontWeight: 900
               }
            }}
         />
         <Box
            sx={{
               width: "80%",
               height: "36.5px",
               position: "relative"
            }}>
            <Typography
               color={message === "Message sent" ? "green" : "orangered"}
            >
               {message}
            </Typography>
            <Button
               variant="contained"
               type="submit"
               sx={{
                  color: mainStyles.textColor2,
                  animationName: "button",
                  animationDuration: "1s",
                  animationIterationCount: "infinite",
                  animationDirection: "alternate",
                  "@keyframes button": {
                     from: {
                        borderRadius: "58% 11% 47% 92% / 78% 68% 18% 32%"
                     },
                     to: {
                        borderRadius: "85% 47% 85% 57% / 69% 39% 85% 15%"
                     }
                  },
                  position: "absolute",
                  right: 0,
                  top: 0,
                  backgroundColor: mainStyles.backgroundColor1,
                  opacity: 1,
                  fontWeight: 900
               }}>
               Submit
            </Button>
         </Box>
      </Container>
   )
}

export default Contacts;