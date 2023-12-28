import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Header from "./static/Header/Header";
import ScrollButtons from "./static/ScrollButtons/ScrollButtons";

const Home = () => {
  return (
    <main>
      {/* static components  */}
      <Header />
      <ScrollButtons />
      {/* sections  */}
      <About />
      <Skills />
      <Projects />
    </main>
  )
}

export default Home;
