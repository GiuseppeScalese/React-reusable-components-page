import React from 'react';
import './Topnav.scss';
import Button from '../../components/Button/Button';


const topnav = (props) => {

    return (
        <div className="Topnav">
          <div className="Topnav__box">
            <h1>Dashboard</h1>
            <Button theme={"blue"}>New workflow</Button>
          </div>
        </div>
    )
};

export default topnav;
