import MainPage from "./components/Pages/Main/Main";
import About from "./components/Pages/About/About";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Parts/Header/Header.jsx";
import Footer from "./components/Parts/Footer/Footer.jsx";
import Portfolio from "./components/Pages/Portfolio/Portfolio";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/portfolio" element={<Portfolio />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
