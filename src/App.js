// import React from 'react';
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Footer from './Footer';
import Clock from './Clock';
function Welcome(props,items) {
return <h1>Hello, {props.name} {props.items}</h1>;
}


class App extends Component{

//  state = {
//     value: 0
//   }
/*
   onClickHandler = () => {
     this.setState((prevState) => {
       return {
         value: prevState.value + 0.05
       }
     })
   }

   onMouseDownHandler = () => {
     this.timer = setInterval(() => {
       this.setState((prevState) => {
         return {s
           value: prevState.value + 0.05
         }
       })
     }, 250);
   }

   onMouseUpHandler = () => {
     clearInterval(this.timer);
   }
   */
  render(){
  return (


    <Router>
    <div className="App">
    <Nav />
    <Clock />
    {/*  <header className="App-header">
          < Welcome message="Welcome reader" />
        < Welcome message="Hello from the other side" />
         <Clock />
         <Contact />
      </header>

 <Welcome name="_ _ _ _" items=". . . ." />*/}
    <Switch>
      <Route  path="/" exact component={Home} />
      <Route  path="/Page1" component={Page1} />
      <Route  path="/Page2" component={Page2} />
      <Route  path="/Page3" component={Page3} />
      <Route  path="/Page4" component={Page4} />
      <Route  path="/Page4" component={Page4} />
    </Switch>

  </div>
  <Footer />
        </Router>


  );
}


}
const Home = () =>(
  <div>
      <h1>Home Page</h1>
  </div>
)

export default App;
