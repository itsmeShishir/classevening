import React, {useState, useRef, useContext, createContext} from 'react'
import { useEffect } from 'react';
import { use } from 'react';
import One from './Component/one';
// create a context
let MyContext = createContext();
    // hooks -> useState, useEffect, useRef, useReducer, useContext
// useState -> functional component -> state management of a compoent -> react hooks

function App() {
  let [count, setCount] = useState(0);
  // useState -> 2 things -> state, setState  = useState(number, "", bool, object{}, array[])
  console.log(count)
  console.log(setCount);

  let increment = () => {
    setCount(count + 1);
  }

  let decrement = () => {
    setCount(count - 1);
  }
  // useEffect Hooks -> side effect -> api call, event listener, timer

  let [data, setData] = useState([]);
  // fetch https://fakestoreapi.com/products this api -> get method -> json data -> array of object
  useEffect(() =>  {
    let fetchData = async () => {
      let response = await fetch('https://fakestoreapi.com/products');
      let  truedata= await response.json();
      console.log(truedata);
      setData(truedata);
    }
    fetchData();
  }, []);

  // go back to top -> useRef
  let okref = useRef(null);
  let handleclick = (e) =>{
    e.preventDefault();
    okref.current.scrollIntoView({behavior: "smooth"});
  }

  return (
   <MyContext.Provider value={'hari'}>
    <div ref={okref}>
     <button onClick={increment}>Count : {count}</button>
     <button onClick={decrement}>Count : {count}</button>
     <button onClick={()=> setCount(count=0)}>Count : {count}</button>
     <One />
    {/* array iteration */}
    {/* map, forEach */}
    {
      data.map((items, index)=>{
        return (
          <div key={index}>
            <h1>{items.title}</h1>
            <p>{items.price}</p>
            <img src={items.image} alt="" />
          </div>
        )
      })
    }
    <a href="" onClick ={handleclick}> GO back to top</a>
    </div>
    </MyContext.Provider>

  )
}

export default App