import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import SetProjects from "./pages/Projects/SetProjects";
import Projects from "./pages/Projects/Projects";
import SingleProject from "./pages/Projects/SingleProject";
import Error from "./pages/Error/Error";
import Sidebar from "./components/Sidebar/Sidebar";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Layout></Layout>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="projects" element={<SetProjects></SetProjects>}></Route>
        <Route
          path="projects/:id"
          element={<SingleProject></SingleProject>}
        ></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
