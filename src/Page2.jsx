import React from 'react';
import { Link,Redirect } from 'react-router-dom';
class Page2 extends React.Component{



render(){
return(
  <div className="shopping-list">
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>


);
}
}

export default Page2;
