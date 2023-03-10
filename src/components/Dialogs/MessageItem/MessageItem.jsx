import React from "react";
import s from './MessageItem.module.css';

const MessageItem = (props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.imageWrapper}>
        <img src={props.message.profilePicture} alt="Avatar"/>
      </div>
      <div className={s.messageWrapper}>
        {props.message.messageText}
      </div>
      <div className={s.timeWrapper}>
        17:03
      </div>
    </div>
  );
}

export default MessageItem;
