import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../components/home/home";
import Missing from "../components/missing/Missing";
import Groceries from "../components/groceries/Groceries";
import HealthAndBeauty from "../components/health&beauty/HealthAndBeauty";
import Fashion from "../components/fashion/Fashion";
import HomeAdnOffice from "../components/homeAndOffice/HomeAndOffice";
import Login from "../components/login/Login";
import Signup from "../components/signup/Signup";
import LandingPage from "../components/landingPage/LandingPage";
import NewProduct from "../components/newProduct/NewProduct";

export const EntryRouting = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/newproduct" element={<NewProduct/>}/>
        <Route exact path="/" element={<LandingPage />}>
          <Route exact path="" element={<Home />} />
          <Route exact path="groceries" element={<Groceries />} />
          <Route exact path="health&beauty" element={<HealthAndBeauty />} />
          <Route exact path="fashion" element={<Fashion />} />
          <Route exact path="home&office" element={<HomeAdnOffice />} />
        </Route>
        <Route exact path="*" element={<Missing />} />
      </Routes>
    </Router>
  );
};
