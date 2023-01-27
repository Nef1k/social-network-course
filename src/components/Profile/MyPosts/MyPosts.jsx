import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = (props) => {
  return (
    <div>
      <NewPost addNewPost={props.addNewPost} newPostText={props.newPostText} changeNewPostText={props.changeNewPostText} />
      <div className={s.posts}>
        { props.posts.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
        {/*<Post message="Post 1" likesCount="22" />*/}
        {/*<Post message="Post 2" likesCount="19" />*/}
        {/*<Post message="Post 3" likesCount="32" />*/}
        {/*<Post message="Post 4" likesCount="54" />*/}
      </div>
    </div>
  );
}

export default MyPosts;
