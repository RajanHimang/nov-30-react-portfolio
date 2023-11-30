import React from "react";
import "./style.scss";
import { images } from "./assets/img/index";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Aboutme from "./components/Aboutme";
import Getintouch from "./components/Getintouch";
import Floatingicon from "./components/Floatingicon";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper">
      {/* <!-- Nav --> */}
      <Header />

      {/* <!-- Hero --> */}
      <Hero />

      {/* <!-- Banner --> */}
      <Banner />

      {/* <!-- Skills --> */}
      <Skills />

      {/* <!-- Projects --> */}
      <Projects />

      {/* <!-- About Me --> */}
      <Aboutme />

      {/* <!-- Get in Touch --> */}
      <Getintouch />

      {/* <!-- footer --> */}
      <Footer />

      {/* <!-- Floating Icon --> */}
      <Floatingicon />
    </div>
  );
}

export default App;
