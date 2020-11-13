import React, { Component } from 'react';
import '../css/Btn.css';

class Btn extends Component {
  render() {
    return <button className="btn">{this.props.name}</button>;
  }
}

export default Btn;
