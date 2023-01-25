import React from "react";
import s from './DialogItem.module.css';
import StyledNavLink from "../../Utils/StyledNavLink";

const DialogItem = (props) => {
  return (
    <StyledNavLink className={s.dialogItem} to={`/dialogs/${props.dialogId}`} activeClassName={s.active}>
      <div className={s.avatar}>
        <img src={props.imgSrc} alt=""/>
      </div>
      <div className={s.name}>
        {props.firstName} {props.lastName}
      </div>
    </StyledNavLink>
  );
};

export default DialogItem;
