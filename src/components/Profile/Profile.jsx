import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.wrapper}>
      <ProfileInfo />
      <div className={s.posts}>
        <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} addNewPost={props.addNewPost} changeNewPostText={props.changeNewPostText} />
      </div>
    </div>
  );
}

export default Profile;
