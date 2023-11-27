import React from "react";

import ListSanPham from "./webnhomlam/Web3.js";
import WebHeader1 from "./webnhomlam/WebHeader.js";
import "./webnhomlam/web.css"
import Middle from "./webnhomlam/WebMiddle.js";
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
    </div>
  );
}