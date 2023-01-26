import React from "react";
import s from "./Friend.module.css"
import StyledNavLink from "../../Utils/StyledNavLink";

const Friend = (props) => {
  return (
    <StyledNavLink className={s.friend} to={`/user/${props.friend.id}`}>
      <img src={props.friend.imgUrl} alt=""/>
      <span>{props.friend.firstName}</span>
    </StyledNavLink>
  );
};

export default Friend;