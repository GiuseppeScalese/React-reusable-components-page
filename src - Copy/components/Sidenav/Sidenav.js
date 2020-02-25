import React from 'react';
import './Sidenav.scss';
import logo from '../../assets/img/tray-logo.png';
import photouser from '../../assets/img/photo-user.png';
import Navlink from '../../components/Navlink/Navlink';

const sidenav = (props) => {

    // const assignedClasses = [];
    // let btnClass = '';
    //
    // if(props.showPersons) {
    //     btnClass = classes.Red;
    // }
    //
    // if (props.personsLength <= 2) {
    //   assignedClasses.push(classes.red);
    // }
    // if (props.personsLength <= 1) {
    //   assignedClasses.push(classes.bold);
    // }

    return (
        // <div className={classes.Sidenav}>
        // test
        //
        //
        // </div>

        <nav className="Sidenav">
          <div className="Sidenav__top-img-section">
            <img className="Sidenav__logo" src={logo} alt="Tray logo" />
            <img className="Sidenav__user" src={photouser} alt="Tray user" />
          </div>
          <div className="Sidenav__nav-links-section">
            <Navlink className={"Navlink Navlink--active"} title="Dashboard link" href="/"><span className="icon icon-dashboard"/><span className="Navlink__label">Dashboard</span></Navlink>
            <Navlink className={"Navlink "} title="Analytics link" href="/"><span className="icon icon-analytics"/><span className="Navlink__label">Analytics</span></Navlink>
            <Navlink className={"Navlink "} title="Library link" href="/"><span className="icon icon-library"/><span className="Navlink__label">Library</span></Navlink>
            <Navlink className={"Navlink "} title="Authentiations link" href="/"><span className="icon icon-authentiations"/><span className="Navlink__label">Authentications</span></Navlink>
            <Navlink className={"Navlink"} title="Settings & people link" href="/"><span className="icon icon-settings"/><span className="Navlink__label">Settings & people</span></Navlink>
          </div>

          <div className="Sidenav__nav-bottom-links-section">
            <Navlink className={"Navlink"} title="Whats new link" href="/"><span className="icon icon-thunder"/><span className="Navlink__label">What's new?</span></Navlink>
            <Navlink className={"Navlink"} title="Getting help link" href="/"><span className="Navlink__label">Getting help</span></Navlink>
            <Navlink className={"Navlink"} title="Product feedback link" href="/"><span className="Navlink__label">Product feedback</span></Navlink>
          </div>
        </nav>
    )
    };

export default sidenav;
