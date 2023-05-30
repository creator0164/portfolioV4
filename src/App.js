import Home from "./screens/home/Home";
import About from "./screens/about/About";
import Portfolio from "./screens/portfolio/Portfolio";
import Resources from "./screens/resources/Resources";
import Contact from "./screens/contact/Contact";
import Article from "./screens/article/Article";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
   </Router>
  );
}

export default App;
