import React from 'react';
import {render} from 'react-dom';

class Clock extends  React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.intervalTimerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnMount() {
    clearInterval(this.intervalTimerId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        
      </div>
    );
  }
}


render(
  <Clock />,
  document.getElementById('app')
)