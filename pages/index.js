import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Projects from "../components/Projects";
import Skills from "../components/Skill";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Marcus Acosta — ML systems engineer</title>
        <meta
          name="description"
          content="Marcus Acosta builds machine learning systems: post-training, inference, evaluation, and the reliability work around them. Open-source contributions to torchtune and mistral.rs."
        />
      </Head>
      <main>
        <Header />
        <Hero />
        <About />
        <Portfolio />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
