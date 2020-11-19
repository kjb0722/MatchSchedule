import React, { Component } from 'react';
import '../css/MainKind.css';
import BtnKind from './BtnKind.jsx';

class MainKind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:3001/matchKind')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data: data.data });
      });
  }
  render() {
    return (
      <div className="main-kind">
        <BtnKind name="LCK"></BtnKind>
        <BtnKind name="라리가 리그"></BtnKind>
        <BtnKind name="프리미어 리그"></BtnKind>
      </div>
    );
  }
}

export default MainKind;
