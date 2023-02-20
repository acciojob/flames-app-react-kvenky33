import React, { Component, useState } from "react";
import "../styles/App.css";

const relation = (str1, str2) => {
  let common = "";
  for (let i = 0; i < str1.length; i++) {
    if (str2.indexOf(str1[i]) !== -1) {
      common += str1[i];
      str2 = str2.replace(str1[i], "");
    }
  }

  let str1WithoutCommon = "";
  for (let i = 0; i < str1.length; i++) {
    if (common.indexOf(str1[i]) === -1) {
      str1WithoutCommon += str1[i];
    }
  }

  let str2WithoutCommon = "";
  for (let i = 0; i < str2.length; i++) {
    str2WithoutCommon += str2[i];
  }

  let totalLength = str1WithoutCommon.length + str2WithoutCommon.length;
  switch (totalLength % 6) {
    case 1:
      return "Friends";
    case 2:
      return "Love";
    case 3:
      return "Affection";
    case 4:
      return "Marriage";
    case 5:
      return "Enemy";
    case 0:
      return "Siblings";
    default:
      return "";
  }
};

const App = () => {
  const [str1, setStr1] = useState("");
  const [str2, setStr2] = useState("");
  const [relationType, setRelationType] = useState("");

  const handleStr1Change = (event) => {
    setStr1(event.target.value);
  };

  const handleStr2Change = (event) => {
    setStr2(event.target.value);
  };

  const handleSubmit = () => {
    // event.preventDefault();
    if (str1 && str2) {
      setRelationType(relation(str1, str2));
    } else {
      setRelationType("Please Enter valid input");
    }
  };
  const handleClear = () => {
    setStr1("");
    setStr2("");
    setRelationType("");
  };

  return (
    <div id="main">
      <label>
        <input
          type="text"
          data-testid="input1"
          value={str1}
          onChange={handleStr1Change}
        />
      </label>

      <label>
        <input
          type="text"
          data-testid="input2"
          value={str2}
          onChange={handleStr2Change}
        />
      </label>

      <button onClick={handleSubmit} data-testid="calculate_relationship">
        Calculate Relationship further
      </button>
      <button onClick={handleClear} data-testid="clear">
        clear
      </button>

      <div>{<h3 data-testid="answer">{relationType}</h3>}</div>
    </div>
  );
};

export default App;
