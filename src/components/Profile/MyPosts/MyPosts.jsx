import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My Posts
      <div className={s.newPost}>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div className={s.posts}>
        <Post message="Post 1" likesCount="22" />
        <Post message="Post 2" likesCount="19" />
        <Post message="Post 3" likesCount="32" />
        <Post message="Post 4" likesCount="54" />
      </div>
    </div>
  );
}

export default MyPosts;
