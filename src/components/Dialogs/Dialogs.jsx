import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import NewMessage from "./NewMessage/NewMessage";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {props.dialogs.map((dialog =>
          <DialogItem dialog={dialog} />
        ))}
      </div>
      <div className={s.messages}>
        <div className={s.messageItems}>
          {props.messages.map((message =>
            <MessageItem message={message} />
          ))}
        </div>
        <div className={s.newMessageWrapper}>
          <NewMessage/>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
