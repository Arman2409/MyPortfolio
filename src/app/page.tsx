import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Header from "./static/Header/Header";
import ScrollButtons from "./static/ScrollButtons/ScrollButtons";

const Home = () => {
  return (
    <main>
      <Header />
      <ScrollButtons />
      <About />
      <Skills />
    </main>
  )
}

export default Home;
