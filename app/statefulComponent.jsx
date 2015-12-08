import React from 'react';
import ReactDOM from 'react-dom';


class Timer extends React.Component {
  constructor() {
    super();
    this.state = {second: 0};
  }
  tick() {
    this.setState({second: this.state.second +1})
  }
  componentDidMount () {
    this.interval= setInterval(this.tick.bind(this), 1000);
  }
  render() {
    return <div> second : {this.state.second}</div>
  }
}

ReactDOM.render(<Timer/>, document.getElementById('app2'))
