import React from "react";
import s from './StyledButton.module.css';

const StyledButton = (props) => {
  return (
    <button>{ props.text }</button>
  );
}

export default StyledButton;
