import React from "react";
import s from './NewPost.module.css';
import StyledButton from "../../../Utils/Button/StyledButton";
import StyledTextArea from "../../../Utils/TextArea/StyledTextArea";

const NewPost = (props) => {
  return (
    <div className={s.newPost}>
      <StyledTextArea placeholder="What's up?"></StyledTextArea>
      <div className={s.controls}>
        <StyledButton text="Add Post">Add Post</StyledButton>
      </div>
    </div>
  );
}

export default NewPost;
