import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.background}></div>
      <div className={s.infoWrapper}>
        <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
          alt="Avatar"
          className={s.avatar}
        />
        <div className={s.info}>
          <h1>James Salivan</h1>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
