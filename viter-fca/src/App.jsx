import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Services from "./components/pages/services/Services";
import Admission from "./components/pages/admission/Admission";
import Gallery from "./components/pages/gallery/Gallery";
import Contact from "./components/pages/contact/Contact";
import Faqs from "./components/pages/faq/Faqs";
import PageNotFound from "./partials/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
    </Router>
  );
}

export default App;
