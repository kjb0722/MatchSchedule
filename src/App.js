import React, { Component } from 'react';
import logo from './img/logo_1.png';
import './App.css';
// import AppMenu from './ui/AppMenu.jsx';
import MainKind from './ui/MainKind.jsx';
import MainList from './ui/MainList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choiceKind: 'PREMIER LEAGUE',
    };
  }
  getChoiceKind = (kind) => {
    this.setState({ choiceKind: kind });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <AppMenu></AppMenu> */}
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main className="App-main">
          <MainKind
            choiceKind={this.state.choiceKind}
            getChoiceKind={this.getChoiceKind}
          ></MainKind>
          <MainList choiceKind={this.state.choiceKind}></MainList>
        </main>
      </div>
    );
  }
}
export default App;
