import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Box } from "@mui/material";

import MainPage from "./components/Pages/Main/Main";
import Header from "./components/Parts/Header/Header.jsx";
import Footer from "./components/Parts/Footer/Footer.jsx";
import Portfolio from "./components/Pages/Portfolio/Portfolio";
import Contacts from "./components/Pages/Contact/Contact";
import mainStyles from "./styles/main.scss";

function App() {
  return (
    <Router>
      <Box sx={{
        height: "100vh",
        backgroundColor: mainStyles.backgroundColor2,
      }}>
       <Box
        sx={{
          backgroundColor: mainStyles.backgroundColor1,
        }}>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} /> 
            <Route path="/portfolio" element={<Portfolio />} /> 
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
          <Footer />
        </Box>
      </Box>
    </Router>
  );
}

export default App;
