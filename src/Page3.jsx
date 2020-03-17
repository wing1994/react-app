import React, {useState, useEffect, Component} from 'react';
import { Link ,Redirect} from 'react-router-dom';

class Page3 extends React.Component{




componentDidMount() {

}

componentWillUnmount() {

}

handleClick(url) {
  window.location.replace('http://github.com');
}



render(){
  return(
    <div>
        <button onClick={this.handleClick.bind(this)}>Redirect</button>


    <button className="square" onClick={function() { alert('Hello'); }}>
        click
      </button>
      </div>
  );

}

}

export default Page3;
