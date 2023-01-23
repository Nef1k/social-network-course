import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.post}>
      <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="Avatar"/>
      <div className={s.contentWrapper}>
        <div className={s.message}>{ props.message }</div>
        <div className={s.likes}>{ props.likesCount } Likes</div>
      </div>
    </div>
  );
};

export default Post;
