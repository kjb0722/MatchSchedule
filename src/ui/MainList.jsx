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
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    let date;
    return (
      <div>
        {this.state.data.map((data, i) => {
          let sameDateCheck = false;
          if (data.date !== '') {
            date = data.date.split('.');
          } else {
            sameDateCheck = true;
          }
          if (data.time !== '' && date[0] >= month && date[1] >= day) {
            return (
              <ListInfo
                key={i}
                date={!sameDateCheck ? `${date[0]}월 ${date[1]}일` : ''}
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
