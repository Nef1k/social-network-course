import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  const posts = [
    { id: 1, message: "Post 1", likesCount: 2364 },
    { id: 2, message: "Post 2", likesCount: 4232 },
    { id: 3, message: "Post 3", likesCount: 3412 },
    { id: 4, message: "Post 4", likesCount: 6752 }
  ];

  return (
    <div className={s.wrapper}>
      <ProfileInfo />
      <div className={s.posts}>
        <MyPosts posts={posts} />
      </div>
    </div>
  );
}

export default Profile;
