import React from "react";
import s from './StyledTextArea.module.css';

const StyledTextArea = (props) => {
  return (
    <textarea placeholder={props.placeholder}>{ props.value }</textarea>
  );
}

export default StyledTextArea;
