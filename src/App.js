import "./App.css";
import Home from "./components/home/home";
import LifeStyle from "./components/lifeStyle/LifeStyle";
import Navigation from "./components/navigation/Navigation";
import Politics from "./components/politics/Politics";
import SocialMedia from "./components/socialMedia/SocialMedia";
import Sports from "./components/sports/Sports";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Missing from "./components/missing/Missing";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sports" element={<Sports />} />
          <Route exact path="/politics" element={<Politics />} />
          <Route exact path="/lifestyle" element={<LifeStyle />} />
          <Route exact path="/socialmedia" element={<SocialMedia />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
