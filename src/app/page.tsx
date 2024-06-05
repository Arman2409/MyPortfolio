import About from "./sections/About/About";
import Footer from "./sections/Footer/Footer";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Header from "./fixed/Header/Header";
import ScrollButtons from "./fixed/ScrollButtons/ScrollButtons";
import Contacts from "./sections/Contacts/Contacts";
import Languages from "./sections/Languages/Languages";
import MouseParticles from "./fixed/MouseParticles/MouseParticles";
import Loading from "./fixed/Loading/Loading";

const Home = () => {
  return (
    <main id="main_container">
      {/* fixed components  */}
      <Loading />
      <Header />
      <ScrollButtons />
      <MouseParticles />
      {/* sections  */}
      <About />
      <Skills />
      <Projects />
      <Languages />
      <Contacts />
      <Footer />
    </main>
  )
}

export default Home;
