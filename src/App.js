import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./assets/scss/style.scss";
import LandingPage from "./pages/LandingPage";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPage}></Route>
      </Router>
    </div>
  );
}

export default App;
