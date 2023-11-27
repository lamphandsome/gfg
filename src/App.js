import React from "react";

import ListSanPham from "./webnhomlam/Web3.js";
import WebHeader1 from "./webnhomlam/WebHeader.js";
import "./webnhomlam/web.css"
import Middle from "./webnhomlam/WebMiddle.js";
import MyButton1 from "./CodeSniper/ss4/vd/Button.js"
import MyButton2 from "./CodeSniper/ss4/vd/Clicked.js"
import MyButton3 from "./CodeSniper/ss4/vd/Counter_Seperate.js"
import MyButton4 from "./CodeSniper/ss4/vd/Counter_Together.js"
export default function App() {
  return (
    <div className="App" id="top">
      {/* <WebHeader1 />
      <Middle />
      <ListSanPham /> */}
      <MyButton1 />
      <MyButton2 />
      <MyButton3 />
      <MyButton4 />
    </div>
  );
}