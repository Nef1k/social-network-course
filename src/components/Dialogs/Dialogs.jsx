import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import NewMessage from "./NewMessage/NewMessage";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <DialogItem id="1" name="John" lastName="Brown" imgSrc="https://i.imgur.com/Sfese1n.png" />
        <DialogItem id="2" name="Steven" lastName="Blaese" imgSrc="https://i.imgur.com/SBVRczc.png" />
        <DialogItem id="3" name="Joe" lastName="Davis" imgSrc="https://i.imgur.com/ZqCeVBj.png" />
        <DialogItem id="4" name="Hanna" lastName="Wilson" imgSrc="https://i.imgur.com/J2cRMYt.png" />
        <DialogItem id="5" name="Jenkins" lastName="Moore" imgSrc="https://i.imgur.com/djnn3nh.png" />
        <DialogItem id="6" name="John" lastName="Taylor" imgSrc="https://i.imgur.com/Sfese1n.png" />
        <DialogItem id="7" name="Steven" lastName="Miller" imgSrc="https://i.imgur.com/SBVRczc.png" />
        <DialogItem id="8" name="Joe" lastName="Smith" imgSrc="https://i.imgur.com/ZqCeVBj.png" />
        <DialogItem id="9" name="Hanna" lastName="Williams" imgSrc="https://i.imgur.com/J2cRMYt.png" />
        <DialogItem id="" name="Jenkins" lastName="Blaese" imgSrc="https://i.imgur.com/djnn3nh.png" />
      </div>
      <div className={s.messages}>
        <div className={s.messageItems}>
          <div>Message Item 1</div>
          <div>Message Item 2</div>
          <div>Message Item 3</div>
          <div>Message Item 4</div>
          <div>Message Item 5</div>
        </div>
        <div className={s.newMessageWrapper}>
          <NewMessage />
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
