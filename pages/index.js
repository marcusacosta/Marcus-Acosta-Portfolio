import Head from 'next/head'
import Image from 'next/image'
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skill";
import {useEffect} from "react";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, opts) => {
      entries.forEach(entry => {
        entry.target.classList.toggle('visible', entry.isIntersecting);
      });
    });
    observer.observe(document.querySelector('div.skills-container'));
    observer.observe(document.querySelector('div.projects-grid'));
    document.querySelectorAll('section').forEach(elem => {
      observer.observe( elem );
    });
  }, []);
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
