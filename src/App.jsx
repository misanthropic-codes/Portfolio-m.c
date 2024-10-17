import BlurBackground from "./components/BlurBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <BlurBackground></BlurBackground>
      <Navbar></Navbar>
      <main className=" antialiased overflow-x-hidden max-w-7xl mx-auto
      relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <About />
      </main>
    </div>
  )
}

export default App
