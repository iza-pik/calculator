export const handleKeyPress = (displayValue, setDisplayValue) => event => {
  if (event.target.id === "CE") {
    setDisplayValue("");
  } else if (event.target.id === "C") {
    setDisplayValue(displayValue.slice(0, -1));
  } else if (event.target.id === "=") {
    try {
      setDisplayValue(eval(displayValue));
    } catch {
      setDisplayValue("Error");
    }
  } else {
    setDisplayValue(displayValue + event.target.id);
  }
};
