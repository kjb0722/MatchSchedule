import React, { Component } from 'react';
import '../css/Btn.css';

class BtnKind extends Component {
  kindChange = (e) => {
    e.preventDefault();
    this.props.getChoiceKind(this.props.name);
  };
  render() {
    return (
      <button onClick={this.kindChange} className={'btn ' + this.props.choice}>
        {this.props.name}
      </button>
    );
  }
}

export default BtnKind;
