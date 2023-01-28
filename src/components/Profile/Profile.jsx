import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.wrapper}>
      <ProfileInfo />
      <div className={s.posts}>
        <MyPosts
          store={props.store}
          // posts={props.store.getState().profilePage.posts}
          // newPostText={props.store.getState().profilePage.newPostText}
          // addNewPost={props.store.addNewPost}
          // changeNewPostText={props.store.changeNewPostText}
        />
      </div>
    </div>
  );
}

export default Profile;
