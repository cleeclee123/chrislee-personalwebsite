import React from "react";
import './Test.css';
import { db } from './Firebase.js';
  
const Test = () => {
  const saveAnswer = (event) => {
    event.preventDefault();

    const elementsArray = [...event.target.elements];

    const formData = elementsArray.reduce((accumulator, currentValue) => {
      if (currentValue.id) {
        accumulator[currentValue.id] = currentValue.value;
      }

      return accumulator;
    }, {});

    db.collection("Test").add(formData);
  };

  return (
    <div className="container">
      <h1> What is your name </h1>
      <form onSubmit = {saveAnswer}>
        <input type = "text" id ="answer" placeholder="Type here..."></input>
        <button> Submit to Firebase </button>
      </form>
    </div>
  );
};

export default Test;