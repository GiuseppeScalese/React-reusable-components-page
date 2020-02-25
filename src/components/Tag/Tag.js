import React from 'react';
import './Tag.scss';

const tag = (props) => {
  return (
    <span className={["Tag Tag--" + props.tagType]}>
        {props.tagLabel}
    </span>
  )
};
export default tag;
