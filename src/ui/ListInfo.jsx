import React, { Component } from 'react';

class ListInfo extends Component {
  render() {
    return (
      <div>
        <p>{this.props.date}</p>
        <div className="list">
          <span>{this.props.time}</span>
          <span>{this.props.place}</span>
          <span>{this.props.teamLeft}</span>
          <span>{this.props.teamLeftScore}</span>
          <span>:</span>
          <span>{this.props.teamRightScore}</span>
          <span>{this.props.teamRight}</span>
        </div>
      </div>
    );
  }
}

export default ListInfo;
