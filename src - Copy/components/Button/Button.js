import React from "react";
import '../../assets/styles/styles.scss';
import "./Button.scss";

const button = (props) => {
      return (
        <button className={["Button Button--" + props.theme]} onClick={props.clicked}>{props.children}</button>
      )
};

export default button;
