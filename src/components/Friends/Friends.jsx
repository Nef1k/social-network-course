import React from "react";
import s from "./Friends.module.css";
import StyledNavLink from "../Utils/StyledNavLink";
import Friend from "./Friend/Friend";

const Friends = (props) => {
  return (
    <div className={s.wrapper}>
      <h2>Friends</h2>
      <div className={s.friendsWrapper}>
        {props.friends.map(friend =>
          <Friend friend={friend} />
        )}
      </div>
    </div>
  )
};

export default Friends;
