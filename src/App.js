import "./App.css";
import "./style/general.css";
import Home from "./components/home/home";
import Navigation from "./components/navigation/Navigation";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Missing from "./components/missing/Missing";
import Groceries from "./components/groceries/Groceries";
import HealthAndBeauty from "./components/health&beauty/HealthAndBeauty";
import Fashion from "./components/fashion/Fashion";
import HomeAdnOffice from "./components/homeAndOffice/HomeAndOffice";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/groceries" element={<Groceries />} />
          <Route exact path="/health&beauty" element={<HealthAndBeauty/>} />
          <Route exact path="/fashion" element={<Fashion/>} />
          <Route exact path="/home&office" element={<HomeAdnOffice/>} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
