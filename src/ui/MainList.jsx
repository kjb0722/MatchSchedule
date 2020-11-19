import React, { Component } from 'react';
import '../css/MainList.css';
import ListInfo from './ListInfo.jsx';

class MainList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:3001/craw')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data: data.data });
      });
  }
  render() {
    const year = new Date().getFullYear();
    return (
      <div>
        {this.state.data.map((data, i) => {
          if (data.time !== '') {
            return (
              <ListInfo
                key={i}
                date={data.date}
                time={data.time}
                place={data.place}
                teamLeft={data.teamLeft}
                teamLeftScore={data.teamLeftScore}
                teamRight={data.teamRight}
                teamRightScore={data.teamRightScore}
              />
            );
          }
        })}
      </div>
    );
  }
}

export default MainList;
