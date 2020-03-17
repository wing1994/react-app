import React, { Component } from 'react';

class Clock extends Component {

constructor(props) {
    super(props);
    this.state = {
        date: new Date()
    };
}

componentDidMount() {
       // it runs after the component output has been rendered to the DOM
       this.clockID = setInterval(
           () => this.tick(),
           1000
       );
   }

   componentWillUnmount() {
       // it runs right before React unmounts and destroys our component
       clearInterval(this.clockID);
   }

   tick = () => {
       this.setState({
           date: new Date()
       })
   }

  render() {
    return (
        <div>Clock</div>,
        <div>Now, {this.state.date.toLocaleTimeString()}</div>
    );
  }
}

export default Clock;
