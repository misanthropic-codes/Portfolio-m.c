import BlurBackground from "./components/BlurBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Contacts from "./components/Contacts";

const App = () => {
  return (
    <div>
      <BlurBackground></BlurBackground>
      <Navbar></Navbar>
      <main className=" antialiased overflow-x-hidden max-w-7xl mx-auto
      relative z-10">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <About />
        <Experience />
        <Contacts />
      </main>
    </div>
  )
}

export default App
