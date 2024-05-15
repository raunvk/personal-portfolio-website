import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Skills } from "./components/Skills/Skills";
import { Experience } from "./components/Experience/Experience";
import { Education } from "./components/Education/Education";
import { Projects } from "./components/Projects/Projects";
import { Certificates } from "./components/Certificates/Certificates";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
