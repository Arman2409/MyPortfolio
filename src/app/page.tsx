import About from "./_components/sections/About/About";
import Footer from "./_components/sections/Footer/Footer";
import Projects from "./_components/sections/Projects/Projects";
import Skills from "./_components/sections/Skills/Skills";
import Header from "./_components/fixed/Header/Header";
import ScrollButtons from "./_components/fixed/ScrollButtons/ScrollButtons";
import Contacts from "./_components/sections/Contacts/Contacts";
import Languages from "./_components/sections/Languages/Languages";
import MouseParticles from "./_components/fixed/MouseParticles/MouseParticles";
import Loading from "./_components/fixed/Loading/Loading";

const Home = () => {
  return (
    <main>
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
