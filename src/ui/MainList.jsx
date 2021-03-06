import React, { Component } from 'react';
import '../css/MainList.css';
import ListInfo from './ListInfo.jsx';
import CircularProgress from '@material-ui/core/CircularProgress';

class MainList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      kind: this.props.choiceKind,
      completed: 0,
      isLoading: true,
    };
  }

  craw = () => {
    this.setState({ kind: this.props.choiceKind });
    fetch('http://localhost:3001/craw', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        kind: this.props.choiceKind,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data: data.data, isLoading: false });
      });
  };

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.craw();
  }
  componentDidUpdate() {
    if (this.props.choiceKind !== this.state.kind) {
      this.setState({ isLoading: true, isData: false });
      this.craw();
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { data, isLoading, completed } = this.state;
    const currentDate = new Date();
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    let date;
    return (
      <div>
        {isLoading ? (
          <CircularProgress
            className="progress"
            size="20rem"
            variant="determinate"
            value={completed}
          />
        ) : (
          data.map((data, i) => {
            let sameDateCheck = false;
            if (data.date !== '') {
              date = data.date.split('.');
            } else {
              sameDateCheck = true;
            }

            if (data.time !== '' && date[0] >= month && date[1] >= day) {
              const time = data.time.split(':');
              const gameStartDate = new Date(
                year,
                date[0] - 1,
                date[1],
                time[0],
                time[1],
              ).getTime();
              const elapsedTime =
                (currentDate.getTime() - gameStartDate) / 1000 / 60;
              const isCurrentGamePlay =
                elapsedTime <= 90 && elapsedTime >= 0 ? 'gamePlay' : '';

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
                  gameEnd={data.gameEnd}
                  isCurrentGamePlay={isCurrentGamePlay}
                />
              );
            } else {
              return null;
            }
          })
        )}
      </div>
    );
  }
}

export default MainList;
