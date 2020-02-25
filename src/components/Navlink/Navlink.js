import React from 'react';
import './Navlink.scss';

const navlink = (props) => {
  return (
    <a {...props}>{props.children}</a>
  )
};
export default navlink;
