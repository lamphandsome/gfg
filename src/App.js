import React from "react";

import ListSanPham from "./webnhomlam/Web3.js";
import WebHeader1 from "./webnhomlam/WebHeader.js";
import "./webnhomlam/web.css"
import Middle from "./webnhomlam/WebMiddle.js";
import Game from "./CodeSniper/XO game/xo.js";
export default function App() {
  return (
    <div className="App" id="top">
      {/* <WebHeader1 />
      <Middle />
      <ListSanPham /> */}
      <Game />
    </div>
  );
}