import React, { Component } from 'react';
import Btn from './Btn.jsx';

class BtnKind extends Component {
  render() {
    return <button>{this.props.name}</button>;
  }
}

export default BtnKind;
