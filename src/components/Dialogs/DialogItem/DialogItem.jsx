import React from "react";
import s from './DialogItem.module.css';
import StyledNavLink from "../../Utils/StyledNavLink";

const DialogItem = (props) => {
  return (
    <StyledNavLink className={s.dialogItem} to={`/dialogs/${props.dialog.id}`} activeClassName={s.active}>
      <div className={s.avatar}>
        <img src={props.dialog.imgSrc} alt=""/>
      </div>
      <div className={s.name}>
        {props.dialog.firstName} {props.dialog.lastName}
      </div>
    </StyledNavLink>
  );
};

export default DialogItem;
