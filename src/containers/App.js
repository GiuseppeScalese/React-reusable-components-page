import React, { Component, useState} from 'react';
import classes from './App.scss';
import '../assets/styles/styles.scss';
import Sidenav from '../components/Sidenav/Sidenav';
import Topnav from '../components/Topnav/Topnav';
import Contentpanel from '../components/Contentpanel/Contentpanel';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[app.js] constructor');
  }

  render() {
      return (
        <div className="App">
          <div className="column column-left">
              <Sidenav/>
           </div>
           <div className="column column-right">
              <Topnav/>
             <div className="wrapper-content">
               <Contentpanel/>
             </div>
           </div>
        </div>
      );
    }
}

export default App;
