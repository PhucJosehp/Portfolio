import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import "./sass/Navbar.scss";
import "./App.css";
import { useRef } from "react";

function App() {
  // Create refs for scrolling to different sections
  const homeRef = useRef(null);
  const interestRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const contactMeRef = useRef(null);

  return (
    <Routes>
      <Route
        element={
          <div className="layout">
            {/* Pass refs to Navbar for handling scroll */}
            <Navbar
              homeRef={homeRef}
              interestRef={interestRef}
              educationRef={educationRef}
              projectsRef={projectsRef}
              contactMeRef={contactMeRef}
            />
            <Outlet />
          </div>
        }
      >
        <Route
          path="/"
          element={
            // Pass the same refs to the Home component to link with Navbar
            <Home
              homeRef={homeRef}
              interestRef={interestRef}
              educationRef={educationRef}
              projectsRef={projectsRef}
              contactMeRef={contactMeRef}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
