import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import NewMessage from "./NewMessage/NewMessage";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <DialogItem dialogId="1" firstName="John" lastName="Brown" imgSrc="https://i.imgur.com/Sfese1n.png" />
        <DialogItem dialogId="2" firstName="Steven" lastName="Blaese" imgSrc="https://i.imgur.com/SBVRczc.png" />
        <DialogItem dialogId="3" firstName="Joe" lastName="Davis" imgSrc="https://i.imgur.com/ZqCeVBj.png" />
        <DialogItem dialogId="4" firstName="Hanna" lastName="Wilson" imgSrc="https://i.imgur.com/J2cRMYt.png" />
        <DialogItem dialogId="5" firstName="Jenkins" lastName="Moore" imgSrc="https://i.imgur.com/djnn3nh.png" />
        <DialogItem dialogId="6" firstName="John" lastName="Taylor" imgSrc="https://i.imgur.com/Sfese1n.png" />
        <DialogItem dialogId="7" firstName="Steven" lastName="Miller" imgSrc="https://i.imgur.com/SBVRczc.png" />
        <DialogItem dialogId="8" firstName="Joe" lastName="Smith" imgSrc="https://i.imgur.com/ZqCeVBj.png" />
        <DialogItem dialogId="9" firstName="Hanna" lastName="Williams" imgSrc="https://i.imgur.com/J2cRMYt.png" />
        <DialogItem dialogId="10" firstName="Jenkins" lastName="Blaese" imgSrc="https://i.imgur.com/djnn3nh.png" />
      </div>
      <div className={s.messages}>
        <div className={s.messageItems}>
          <MessageItem messageText="Message Item 1" profilePicture="https://i.imgur.com/SBVRczc.png" />
          <MessageItem messageText="Message Item 2" profilePicture="https://i.imgur.com/SBVRczc.png" />
          <MessageItem messageText="Message Item 3" profilePicture="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" />
          <MessageItem messageText="Message Item 4" profilePicture="https://i.imgur.com/SBVRczc.png" />
          <MessageItem messageText="Message Item 5" profilePicture="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" />
        </div>
        <div className={s.newMessageWrapper}>
          <NewMessage />
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
