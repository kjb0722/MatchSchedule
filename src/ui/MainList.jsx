import React, { Component } from 'react';
import '../css/MainList.css';

class MainList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: null,
      test2: null,
    };
  }
  componentDidMount() {
    fetch('http://localhost:3001/api')
      .then((res) => res.json())
      .then((data) => this.setState({ test: data.test, test2: data.test2 }));
  }
  render() {
    const { test } = this.state;
    const { test2 } = this.state;
    return (
      <div>
        <p>11월 1일(일)</p>
        <div className="list">
          <div>프리미어리그</div>
          <span>00:00</span>
          <span>Turf Moor</span>
          <span>번리</span>
          <span>0</span>
          <span>:</span>
          <span>3</span>
          <span>첼시</span>
          <div>경기기록</div>
        </div>
        <div>{test}</div>
        <div>{test2}</div>
      </div>
    );
  }
}

export default MainList;
