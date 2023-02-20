import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  let RelationshipObj = {
    0: "Siblings",
    1: "Friends",
    2: "Love",
    3: "Affection",
    4: "Marriage",
    5: "Enemy",
  };
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    name === "name1" ? setName1(value) : setName2(value);
  };
  const handleRelation = () => {
    if (!name1 || !name2) {
      setResult("Please Enter valid input");
    }
    let strLength = name1.length + name2.length;
    for (let i = 0; i < name1.length; i++) {
      if (name2.includes(name1[i])) {
        strLength = strLength - 2;
      }
      break;
    }
    setResult(RelationshipObj[strLength % 6]);
  };
  const handleClear = () => {
    setName1("");
    setName2("");
    setResult("");
  };
  return (
    <div id="main">
      {/* Do not remove the main div */}

      <input
        type="text"
        value={name1}
        name="name1"
        data-testid="input1"
        onChange={handleChange}
        placeholder="Enter first name"
      />
      <input
        type="text"
        value={name2}
        name="name2"
        data-testid="input2"
        onChange={handleChange}
        placeholder="Enter second name"
      />
      <button data-testid="calculate_relationship" onClick={handleRelation}>
        Calculate Relationship Future
      </button>
      <button data-testid="clear" onClick={handleClear}>
        Clear
      </button>
      <br />
      <h3 data-testid="answer">{result}</h3>
    </div>
  );
};

export default App;
