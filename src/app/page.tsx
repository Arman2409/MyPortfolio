import About from "./sections/About/About";
import Footer from "./sections/Footer/Footer";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Header from "./fixed/Header/Header";
import ScrollButtons from "./fixed/ScrollButtons/ScrollButtons";
import StretchingLine from "./fixed/StretchingLine/StretchingLine";

const Home = () => {
  return (
    <main>
      {/* fixed components  */}
      <Header />
      <ScrollButtons />
      {/* sections  */}
      <StretchingLine top={10} left={30}/>
      <StretchingLine top={30}  left={40}/>
      <StretchingLine top={20} left={50}/>
      <StretchingLine top={30}  left={60}/>
      <About />
      <Skills />
      <Projects />
      <Footer />
    </main>
  )
}

export default Home;
