import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import NewMessage from "./NewMessage/NewMessage";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = () => {

  const dialogs = [
    {id: "1", firstName: "John", lastName: "Brown", imgSrc: "https://i.imgur.com/Sfese1n.png"},
    {id: "2", firstName: "Steven", lastName: "Blaese", imgSrc: "https://i.imgur.com/SBVRczc.png"},
    {id: "3", firstName: "Joe", lastName: "Davis", imgSrc: "https://i.imgur.com/ZqCeVBj.png"},
    {id: "4", firstName: "Hanna", lastName: "Wilson", imgSrc: "https://i.imgur.com/J2cRMYt.png"},
    {id: "5", firstName: "Jenkins", lastName: "Moore", imgSrc: "https://i.imgur.com/djnn3nh.png"},
    {id: "6", firstName: "John", lastName: "Taylor", imgSrc: "https://i.imgur.com/Sfese1n.png"},
    {id: "7", firstName: "Steven", lastName: "Miller", imgSrc: "https://i.imgur.com/SBVRczc.png"},
    {id: "8", firstName: "Joe", lastName: "Smith", imgSrc: "https://i.imgur.com/ZqCeVBj.png"},
    {id: "9", firstName: "Hanna", lastName: "Williams", imgSrc: "https://i.imgur.com/J2cRMYt.png"},
    {id: "10", firstName: "Jenkins", lastName: "Blaese", imgSrc: "https://i.imgur.com/djnn3nh.png"}
  ];

  const messages = [
    {messageText: "Message Item 1", profilePicture: "https://i.imgur.com/SBVRczc.png"},
    {messageText: "Message Item 2", profilePicture: "https://i.imgur.com/SBVRczc.png"},
    {messageText: "Message Item 3", profilePicture: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"},
    {messageText: "Message Item 4", profilePicture: "https://i.imgur.com/SBVRczc.png"},
    {messageText: "Message Item 5", profilePicture: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"},
  ]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogs.map((dialog =>
          <DialogItem dialog={dialog} />
        ))}
      </div>
      <div className={s.messages}>
        <div className={s.messageItems}>
          {messages.map((message =>
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
