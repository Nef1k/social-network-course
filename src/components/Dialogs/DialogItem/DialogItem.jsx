import React from "react";
import s from './DialogItem.module.css';
import StyledNavLink from "../../Utils/StyledNavLink";

const DialogItem = (props) => {
  return (
    <StyledNavLink className={s.dialogItem}>
      <div className={s.avatar}>
        <img src={props.imgSrc} alt=""/>
      </div>
      <div className={s.name}>
        {props.name} {props.lastName}
      </div>
    </StyledNavLink>
  );
};

export default DialogItem;
