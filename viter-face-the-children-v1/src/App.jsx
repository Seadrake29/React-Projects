import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Faq from "./components/pages/faq/Faq";
import Strategy from "./components/pages/strategy/Strategy";
import Contact from "./components/pages/contact/Contact";
import Sponsor from "./components/pages/sponsor/Sponsor";
import Donate from "./components/pages/donate/Donate";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PageNotFound from "./components/partials/PageNotFound";
import ChildDetails from "./components/pages/sponsor/ChildDetails";
import GeneralDonation from "./components/pages/donate/GeneralDonation";
import FeedingProgram from "./components/pages/donate/FeedingProgram";
import ChildrenSponsor from "./components/pages/donate/ChildrenSponsor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/sponsor/:id" element={<ChildDetails />} />
        <Route
          path="/donate/children-sponsorship"
          element={<ChildrenSponsor />}
        />
        <Route path="/donate/feeding-program" element={<FeedingProgram />} />
        <Route path="/donate/general-donation" element={<GeneralDonation />} />
      </Routes>
    </Router>
  );
}

export default App;
