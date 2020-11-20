import React, { Component } from 'react';
import '../css/Btn.css';

class BtnKind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kindChoice: false,
    };
  }
  kindChange = () => {
    this.setState({ kindChoice: true });
  };
  render() {
    return (
      <button
        onClick={this.kindChange}
        className={this.kindChoice ? 'kindChoice' : ''}
      >
        {this.props.name}
        {this.kindChoice ? 'kindChoice' : ''}
      </button>
    );
  }
}

export default BtnKind;
