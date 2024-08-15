import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Blog from "../Pages/Blog";
import Faqs from "../Pages/Faqs";
import Portfolio from "../Pages/Portfolio";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/faqs" element={<Faqs />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}
export default AppRouter;
