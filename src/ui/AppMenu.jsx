import React, { Component } from 'react';
import '../css/AppMenu.css';
import Btn from './Btn.jsx';

class AppMenu extends Component {
  render() {
    return (
      <div className="App-menu">
        <Btn name="로그인"></Btn>
        <Btn name="회원가입"></Btn>
      </div>
    );
  }
}

export default AppMenu;
