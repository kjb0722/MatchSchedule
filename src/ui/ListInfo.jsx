import React, { Component } from 'react';
import '../css/ListInfo.css';

class ListInfo extends Component {
  render() {
    return (
      <div>
        <p className="infoDate">{this.props.date}</p>
        <p>{this.props.elapsedTime}</p>
        <div
          className={
            'list ' + this.props.gameEnd + ' ' + this.props.isCurrentGamePlay
          }
        >
          <span className="infoTime">{this.props.time}</span>
          <span className="infoPlace">{this.props.place}</span>
          <span className="infoTeam">{this.props.teamLeft}</span>
          <span className="infoTeamScore">{this.props.teamLeftScore}</span>
          <span>:</span>
          <span className="infoTeamScore">{this.props.teamRightScore}</span>
          <span className="infoTeam">{this.props.teamRight}</span>
          {this.props.isCurrentGamePlay !== '' ? (
            <span className="btnGamePlay">경기 중</span>
          ) : null}
        </div>
      </div>
    );
  }
}

export default ListInfo;
