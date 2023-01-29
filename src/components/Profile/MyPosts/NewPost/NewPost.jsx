import React from "react";
import s from './NewPost.module.css';
import StyledButton from "../../../Utils/Button/StyledButton";
import StyledTextArea from "../../../Utils/TextArea/StyledTextArea";

function NewPost(props) {
  function handleClick() {
    props.store.dispatch({
      type: 'ADD-POST',
    });
  }

  function handleChange(e) {
    props.store.dispatch({
      type: 'UPDATE-NEW-POST-TEXT',
      newPostText: e.target.value,
    })
  }

  return (
    <div className={s.newPost}>
      <StyledTextArea
        placeholder="What's up?"
        onChange={handleChange}
        value={props.store.getState().profilePage.newPostText}
      />
      <div className={s.controls}>
        <StyledButton text="Add Post" onClick={handleClick} />
      </div>
    </div>
  );
}

export default NewPost;
