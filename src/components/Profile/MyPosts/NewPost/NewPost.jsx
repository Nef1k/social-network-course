import React from "react";
import s from './NewPost.module.css';
import StyledButton from "../../../Utils/Button/StyledButton";
import StyledTextArea from "../../../Utils/TextArea/StyledTextArea";

function NewPost(props) {
  function handleClick() {
  }

  return (
    <div className={s.newPost}>
      <StyledTextArea placeholder="What's up?"></StyledTextArea>
      <div className={s.controls}>
        <StyledButton text="Add Post" onClick={handleClick} />
      </div>
    </div>
  );
}

export default NewPost;
