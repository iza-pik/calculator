import React from "react";
import Button from "../button";
import "./keyboard.css";
import { keys } from "../../constants";

const Keyboard = props => (
  <div className="keyboard">
    {keys.map(key => (
      <Button
        key={key}
        type="submit"
        className="key"
        disabled={key !== "CE" && props.displayValue === "Error"}
        onClick={props.onKeyPress}
        id={key}
      >
        {key}
      </Button>
    ))}
  </div>
);

export default Keyboard;
