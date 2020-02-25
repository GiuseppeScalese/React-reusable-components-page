import React, { Component, useState} from 'react';
import classes from './App.scss';
import '../assets/styles/styles.scss';
// import Persons from '../components/Persons/Persons';
import Sidenav from '../components/Sidenav/Sidenav';
import Topnav from '../components/Topnav/Topnav';
import Button from '../components/Button/Button';
// import WithClass from "../hoc/WithClass";

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[app.js] constructor');
  }



  render() {
    console.log('[app.js] render');
    // let persons = null;
    //
    // if (this.state.showPersons) {
    //   persons = < Persons
    //   persons = {
    //     this.state.persons
    //   }
    //   clicked = {
    //     this.deletePersonHandler
    //   }
    //   changed = {
    //     this.nameChangeHandler
    //   }
    //   />
    // }

      return (
        <div className="App">
          <div className="column column-sidenav">
            <Sidenav/>
          </div>
          <div className="column column-content">
            <div className="column-wrapper">
              <Topnav/>

            </div>
            <div className="column-wrapper">
              <div className="wrapper-content">
                  test

              </div>
            </div>


          </div>


        </div>
      );
  //  return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'works?'));
}
}

export default App;


// import React from 'react';
// import './App.scss';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
