import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import NewMessage from "./NewMessage/NewMessage";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = ({store}) => {

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {store.getState().dialogsPage.dialogs.map((dialog =>
          <DialogItem dialog={dialog} key={dialog.id} />
        ))}
      </div>
      <div className={s.messages}>
        <div className={s.messageItems}>
          {store.getState().dialogsPage.messages.map((message =>
            <MessageItem message={message} key={message.id} />
          ))}
        </div>
        <div className={s.newMessageWrapper}>
          <NewMessage store={store}/>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
