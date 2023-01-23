import React from "react";
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.content}>
        <div className={s.left}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/ZDF_logo%21_Logo_2021.svg/512px-ZDF_logo%21_Logo_2021.svg.png"
            alt="Header"/>
          <span>Social Network</span>
        </div>
        <div className={s.right}>
          Logout
        </div>
      </div>
    </header>
  );
}

export default Header
