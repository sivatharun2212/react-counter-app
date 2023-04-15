import "./styles.css";
import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handle}>{props.btnName}</button>;
};

const Counter = () => {
  let [count, setCount] = useState(0);
  let [factor, setFactor] = useState(1);
  const countStyle = {
    color: count >= 0 ? "green" : "red"
  };
  const handleIncrement = () => {
    setCount(count + factor);
  };

  const handleDecrement = () => {
    setCount(count - factor);
  };

  const handleFactor = (e) => {
    let factorValue = parseInt(e.target.value, 10);
    if (factorValue) {
      setFactor(factorValue);
    } else if (factorValue === 0) {
      setFactor(0);
    } else {
      setFactor(1);
    }
  };

  return (
    <div className="container">
      <h1 className="heading">counter</h1>
      <div className="count">
        <h1 style={countStyle} className="countNumber">
          {count}
        </h1>
        <div className="btns">
          <Button handle={handleIncrement} btnName="Increment" />
          <Button handle={handleDecrement} btnName="Decrement" />
          <Button handle={() => setCount((count = 0))} btnName="Reset" />
        </div>
        <h4 className="info">
          Give a Custom factor to increment and decrement
        </h4>
        <input className="custom-input" type="number" onChange={handleFactor} />
      </div>
    </div>
  );
};

export default Counter;
