import React from 'react';
import logo from './logo.svg';
import './App.css';

//function App(props) {
 // return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    //<h1>Hello, world!</h1>
  //   <div>
  //  <h1>Hello, world!</h1>
  //  <h2>现在是 {props.date.toLocaleTimeString()}.</h2>
  //   <h3>{1+1}</h3> 
  // </div>
  // );
//}

//export default App;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
 
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
export default App;
