import React from 'react';
import './Checkbox.scss';
import classnames from 'classnames';

const checkbox = (props) => {
  return (
    <div className="Checkbox">
      <input id={props.id} type="checkbox" onChange={props.handleCheck} defaultChecked={props.checked}/>
      <label htmlFor={props.id}><span className={classnames('checkbox-label', props.className)}></span>{props.label}</label>
    </div>


  )
};
export default checkbox;
