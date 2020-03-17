import React, {useState, useEffect, Component} from 'react';
import { Link } from 'react-router-dom';

class Page4 extends React.Component{




  componentDidMount () {
       fetch('example.com/data.json').then(data => {
         this.setState({ dataReady: true })
       })

       this.handleServerItemsLoad()

   }

  componentWillUnmount() {

  }


handleServerItemsLoad = () => {
  fetch('https://mgr.hk/kelvin/ci/api/ldata/getbrand', {
    method: 'GET'
    })
    .then((response) => {
      // console.log(response)
      if (!response.ok) throw new Error(response.statusText)
      return response.json()
    })
    .then((itemList) => {
      // console.log(itemList)
       const items = itemList.map((item) => {
         return Object.assign({}, item, { isEditing: false })
       })

      this.setState({
        items,
      })
    })
    .catch((error) => {
      console.error(error)
    })
}

render(){
  return(
    <button className="square" onClick={function() { alert('Hello'); }}>
        click
      </button>
  );
}

}


function get(url) {

}


export default Page4;
