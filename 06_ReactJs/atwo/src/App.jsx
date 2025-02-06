// function App (){
//   return(
//     <h1>RKD - Class 6pm to 7:15pms</h1>
//   )
// }
// export default App;

// export function App (){
//   return(
//     <h1>RKD - Class 6pm to 7:15pms</h1>
//   )
// }

// arrow function

import ButtonComponent from "./component/button/button";
import React from "react";
import Home from "./pages/home";
let App = ()=>{
  return(
    <React.Fragment>
      <h1>RKD - Class 6pm to 7:15pms</h1>
      <ButtonComponent />
      {/* <ButtonComponent />
      <ButtonComponent />
      <ButtonComponent /> */}
      <Home />

    </React.Fragment>
  )
}
export default App;

// export const App = ()=>{
//   return(
//     <h1>RKD - Class 6pm to 7:15pm</h1>
//   )
// }

// import React from "react"
// class App extends React.Component {
//   render() {
//     return (
//       <h1>RKD - Class 6pm to 7:15pm</h1>
//     )
//   }
// }

// export default App;

