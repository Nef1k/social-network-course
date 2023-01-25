import React from "react";
import s from './Navbar.module.css';
import StyledNavLink from "../Utils/StyledNavLink";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <StyledNavLink activeClassName={s.active} to="/" end>Profile</StyledNavLink>
      </div>
      <div className={s.item}>
        <StyledNavLink activeClassName={s.active} to="/dialogs">Messages</StyledNavLink>
      </div>
      <div className={s.item}>
        <StyledNavLink activeClassName={s.active} to="/news">News</StyledNavLink>
      </div>
      <div className={s.item}>
        <StyledNavLink activeClassName={s.active} to="/music">Music</StyledNavLink>
      </div>
      <div className={s.item}>
        <StyledNavLink activeClassName={s.active} to="/settings">Settings</StyledNavLink>
      </div>
    </nav>
  );
}

export default Navbar;
