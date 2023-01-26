import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import { CartProvider } from "../../context/cartContext";

function LandingPage() {
  return (
    <div className="landing-page">
      <CartProvider>
      <Navigation />
        <Outlet />
      </CartProvider>
    </div>
  );
}

export default LandingPage;
