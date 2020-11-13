import React, { Component } from 'react';
import logo from './img/logo_1.png';
import './App.css';
import AppMenu from './ui/AppMenu.jsx';
import MainKind from './ui/MainKind.jsx';
import MainList from './ui/MainList.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppMenu></AppMenu>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main className="App-main">
          <MainKind></MainKind>
          <MainList></MainList>
        </main>
      </div>
    );
  }
}

export default App;
