import React from "react";
import s from './NewPost.module.css';

const NewPost = (props) => {
  return (
    <div className={s.newPost}>
      <textarea placeholder="What's up?"></textarea>
      <div className={s.controls}>
        <button>Add Post</button>
      </div>
    </div>
  );
}

export default NewPost;
