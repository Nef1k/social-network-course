import React from "react";
import s from './StyledTextArea.module.css';

const StyledTextArea = (props) => {
  return (
    <textarea placeholder={props.placeholder} onChange={props.onChange} value={props.value} />
  );
}

export default StyledTextArea;
