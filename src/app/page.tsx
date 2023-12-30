import About from "./sections/About/About";
import Footer from "./sections/Footer/Footer";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Header from "./fixed/Header/Header";
import ScrollButtons from "./fixed/ScrollButtons/ScrollButtons";
import Contacts from "./sections/Contacts/Contacts";
import Languages from "./sections/Languages/Languages";

const Home = () => {
  return (
    <main id="main_container">
      {/* fixed components  */}
      <Header />
      <ScrollButtons />
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
