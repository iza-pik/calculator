import React from "react";
import "./display.css";
import Logo from "../logo";

const Display = props => (
  <div className="display">
    <Logo />
    {props.displayValue || "0"}
  </div>
);

export default Display;
