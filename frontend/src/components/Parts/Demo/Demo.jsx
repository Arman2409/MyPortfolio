import {Box, CircularProgress} from "@mui/material";

const Demo = ({ state }) => {
   return (
    <Box 
    sx={{
        backgroundColor: "black",
        opacity: 0.8,
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 2,
        display: state ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center"
    }}>
       <CircularProgress/>
    </Box>
   )
};

export default Demo;