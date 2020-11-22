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
        {this.state.data.map((data, i) => {
          return (
            <BtnKind
              getChoiceKind={this.props.getChoiceKind}
              key={i}
              name={data.name}
              choice={this.props.choiceKind === data.name ? 'kindChoice' : ''}
            ></BtnKind>
          );
        })}
      </div>
    );
  }
}

export default MainKind;
