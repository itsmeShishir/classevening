import {useState} from "react";
import rkd from "./assets/img1.jpg";
import two from "./assets/img2.jpg";
import BlogPage from "./pages/BlogPage";
function App(){
  let [count, setCount] = useState(0);
  console.log(count);
  console.log(setCount);
  
  let increment  = () =>{
    setCount(count + 1);
  }

  return(
    <>
      <h1 className="text-4xl font-bold text-red-500">RKD - Class 6pm to 7:15pms</h1>
      <img src={rkd} alt="" />
      <img src={two} alt="" />
      <button onClick={increment}>COunt : {count}</button>
      <BlogPage />
      {
        /* 
        this is multi line comment
        */
      }
      {/* hooks in js -> facebook -> hooks -> useState, useEffect, useref, useReducer, useContext, */}

      {/* count number  */}

    </>
  )
}

export default App;