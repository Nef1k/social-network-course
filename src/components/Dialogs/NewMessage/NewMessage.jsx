import React from "react";
import s from './NewMessage.module.css';
import StyledTextArea from "../../Utils/TextArea/StyledTextArea";
import StyledButton from "../../Utils/Button/StyledButton";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/store";

const NewMessage = ({store}) => {
  function handleChange(e) {
    store.dispatch(updateNewMessageTextActionCreator(e.target.value));
  }

  function handleClick() {
    store.dispatch(addMessageActionCreator());
  }

  return (
    <div className={s.wrapper}>
      <StyledTextArea placeholder="New Message..." onChange={handleChange} value={store.getState().dialogsPage.newMessageText}/>
      <StyledButton text="Отправить" onClick={handleClick} />
    </div>
  );
};

export default NewMessage;
