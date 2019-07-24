import React from 'react';
import "./Square.css";

const Square = (props) => {
  return (
    <button className = "square" onClick = {props.onClick}>
      {props.buttonText}
    </button>
  );
}

export default Square;