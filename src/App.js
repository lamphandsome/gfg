import React from "react";
import "./index.css";

import Navbar from "./Navbar";
import PricingHeader from "./PricingHeader.js";
import Plans from "./Plans";
import Footer from "./Footer";
import PlanCard from "./PlanCard.js";
import ItemList from "./itemlist.js"

export default function App() {
  return (
    <div className="App" id="top">
      <h1>Triển Lãm Tranh</h1>
      {/* <Navbar />
      <PricingHeader />
        <Plans />
      <Footer /> */}
      <ItemList />
    </div>
  );
}