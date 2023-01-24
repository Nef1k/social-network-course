import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div className={s.userInfo}>
        <img src="https://i.imgur.com/7MRSU4k.png" alt="Background" className={s.background}/>
        <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
          alt="Avatar"
          className={s.avatar}
        />
        <div className={s.info}>
          <h1>James Salivan</h1>
        </div>
      </div>
      <div className={s.posts}>
        <MyPosts/>
      </div>
    </div>
  );
}

export default Profile;
