import React, { Component } from 'react';
import '../css/ListInfo.css';

class ListInfo extends Component {
  render() {
    return (
      <div>
        <p class="infoDate">{this.props.date}</p>
        <div className="list">
          <span className="infoTime">{this.props.time}</span>
          <span className="infoPlace">{this.props.place}</span>
          <span className="infoTeam">{this.props.teamLeft}</span>
          <span className="infoTeamScore">{this.props.teamLeftScore}</span>
          <span>:</span>
          <span className="infoTeamScore">{this.props.teamRightScore}</span>
          <span className="infoTeam">{this.props.teamRight}</span>
        </div>
      </div>
    );
  }
}

export default ListInfo;
