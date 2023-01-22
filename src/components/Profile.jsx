import React from "react";
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://i.imgur.com/xQliSNh.png"
          alt="Background"/>
      </div>
      <div>
        ava + description
        {/*<img*/}
        {/*  src="https://cdn.vox-cdn.com/thumbor/m8BU53wkSiPuTtrPtexjVJYpdSk=/0x0:1980x1320/1400x1050/filters:focal(1141x290:1457x606):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/71757363/avatar6.0.jpg"*/}
        {/*  alt="Avatar"/>*/}
      </div>
      <div>
        My Posts
        <div>New Post</div>
        <div className={s.posts}>
          <div className={s.item}>Post 1</div>
          <div className={s.item}>Post 2</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
