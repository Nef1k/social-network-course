import React from "react";
import s from './NewMessage.module.css';
import StyledTextArea from "../../Utils/TextArea/StyledTextArea";
import StyledButton from "../../Utils/Button/StyledButton";

const NewMessage = () => {
  return (
    <div className={s.wrapper}>
      <StyledTextArea placeholder="asfadf"></StyledTextArea>
      <StyledButton text="Отправить" />
    </div>
  );
};

export default NewMessage;
