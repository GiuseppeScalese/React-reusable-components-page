import React from 'react';
import Tag from '../Tag/Tag';
import './Card.scss';

const card = (props) => {
  return (
  <div className="Card">
      {props.cardType  ? (
        <div className="Card__icon">
          <span className={props.iconProduct}></span>
          <div className="Card__icon-box">
            <div className="Card__row">
              <span className="primaryText">{props.primaryText}</span>
            </div>
            <div className="Card__row">
              <Tag tagLabel={props.tagLabel} tagType={props.tagType}/><span className="secondaryText">{props.secondaryText}</span>
            </div>
          </div>
          <span className="icon-explore"></span>
        </div>
      ) : (
        <div>
          <div className="Card__row">
            <span className={props.iconType}></span><span className="primaryText">{props.primaryText}</span>
          </div>
          <div className="Card__row">
            <Tag tagLabel={props.tagLabel} tagType={props.tagType}/><span className="secondaryText">{props.secondaryText}</span>
          </div>
          <span className="icon-explore"></span>
        </div>
      )}

    </div>
  )
};
export default card;
