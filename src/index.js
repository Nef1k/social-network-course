import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

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
];

const posts = [
  {id: 1, message: "Post 1", likesCount: 2364},
  {id: 2, message: "Post 2", likesCount: 4232},
  {id: 3, message: "Post 3", likesCount: 3412},
  {id: 4, message: "Post 4", likesCount: 6752}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
