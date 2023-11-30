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
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/aboutme" element={<Aboutme />}></Route>
        <Route path="/contact" element={<Getintouch />}></Route>
      </Routes>
    </div>
  );
}

export default App;
