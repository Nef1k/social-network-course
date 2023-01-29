import React from "react";
import s from './NewPost.module.css';
import StyledButton from "../../../Utils/Button/StyledButton";
import StyledTextArea from "../../../Utils/TextArea/StyledTextArea";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/store";

function NewPost(props) {
  function handleClick() {
    props.store.dispatch(addPostActionCreator());
  }

  function handleChange(e) {
    props.store.dispatch(updateNewPostTextActionCreator(e.target.value));
  }

  return (
    <div className={s.newPost}>
      <StyledTextArea
        placeholder="What's up?"
        onChange={handleChange}
        value={props.store.getState().profilePage.newPostText}
      />
      <div className={s.controls}>
        <StyledButton text="Add Post" onClick={handleClick}/>
      </div>
    </div>
  );
}

export default NewPost;
