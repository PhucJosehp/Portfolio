import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Interest from "./Pages/Interest";
import Education from "./Pages/Education";
import ContactMe from "./Pages/ContactMe";
import Project from "./Pages/Project";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/interest" element={<Interest />} />
      <Route path="/education" element={<Education />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/contact" element={<ContactMe />} />
    </Routes>
  );
}

export default App;
