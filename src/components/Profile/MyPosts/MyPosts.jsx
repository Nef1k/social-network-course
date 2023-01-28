import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = (props) => {
  return (
    <div>
      <NewPost store={props.store} />
      <div className={s.posts}>
        { props.store.getState().profilePage.posts.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
      </div>
    </div>
  );
}

export default MyPosts;
