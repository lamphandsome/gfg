import React from "react";
// import "./index.css";

import Navbar from "./Navbar";
import PricingHeader from "./PricingHeader.js";
import Plans from "./Plans";
import Footer from "./Footer";
import PlanCard from "./PlanCard.js";
import ItemList from "./itemlist.js"
import Myapp from "./ProductList.js";
import ProductList from "./ProductList.js";
import "./App.css";
import ListSanPham from "./Web3.js";
import WebHeader1 from "./WebHeader.js";
import "./web.css"
import Middle from "./WebMiddle.js";
import groupMembers from "./WebFooter.js";
export default function App() {
  return (
    <div className="App" id="top">
      {/* <h1>Triển Lãm Tranh</h1> */}
      {/* <Navbar />
      <PricingHeader />
        <Plans />
      <Footer /> */}
      {/* <ItemList /> */}
      {/* <ProductList /> */}
      <WebHeader1 />
      <Middle />
      <ListSanPham />
      <groupMembers />
    </div>
  );
}