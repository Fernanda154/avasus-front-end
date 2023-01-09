
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./pages/About";
import DetailCourse from "./pages/DetailCourse";
import Home from "./pages/Home";
import Partners from "./pages/Partners";
import SpecialModules from "./pages/SpecialModules";
import Transparency from "./pages/Transparency";

const Rotas = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/modules" element={<SpecialModules />} />
        <Route path="/courses/:id" element={<DetailCourse />} />
        <Route path="/about" element={<About />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/transparency" element={<Transparency />} />
      </Routes>
    </BrowserRouter>
  )
}


export default Rotas;