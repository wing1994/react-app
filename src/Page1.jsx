import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


function Page1(){
  useEffect(()=> {
    fetchItems();
  }
  ,[]);

  const [items, setItems] = useState([]);

  const fetchItems = async() =>{
    const data = await fetch(
      'https://mgr.hk/kelvin/ci/api/ldata/getbrand'
    );

      const items = await data.json();
    setItems(items);
    console.log(items);
    // console.log(items.result);
    console.log(items.result[0]);
  };



  return(
    <div>
      {/*items.map(item =>
        <h1>{item.result}</h1>
      )*/}

      {fetchItems.result}
       <ul></ul>
    </div>
  );

}

function test(number) {
    return new Promise((resolve, reject) => {
        if (number === 1) {
            resolve("Success")
        } else {
            reject("Failed")
        }
    })
}
async function main() {
    var result = await test(1)
    console.log(result)
}
main()

export default Page1;
