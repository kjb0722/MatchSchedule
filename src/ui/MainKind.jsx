import React, { Component } from 'react';
import '../css/MainKind.css';
import BtnKind from './BtnKind.jsx';

class MainKind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      choiceKind: '',
    };
  }
  componentDidMount() {
    fetch('http://localhost:3001/matchKind')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data: data.data });
      });
  }
  getChoiceKind = (kind) => {
    this.setState({ choiceKind: kind });
  };
  render() {
    return (
      <div className="main-kind">
        {this.state.data.map((data, i) => {
          return (
            <BtnKind
              getChoiceKind={this.getChoiceKind}
              key={i}
              name={data.name}
              choice={this.state.choiceKind === data.name ? 'kindChoice' : ''}
            ></BtnKind>
          );
        })}
        <p>{this.state.choiceKind}</p>
      </div>
    );
  }
}

export default MainKind;
