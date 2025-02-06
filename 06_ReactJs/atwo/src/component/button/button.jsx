// how to write a css -> inline , internal and external 
import "./button.css"

function ButtonComponent() {
  let style = {textDecoration:"none", 
    fontSize:"20px", padding: "30px 15px", 
    backgroundColor:"red", display:"block", 
    borderRadius: "50px", margin: "10px", 
    border: "2px solid red", 
    textAlign :"center", color: "white", 
    textTransform: "uppercase", width: "200px"
    }
     
  return (
    <>
    {/* <a href="" style={{textDecoration:"none", 
    fontSize:"20px", padding: "30px 15px", 
    backgroundColor:"blue", display:"block", 
    borderRadius: "50px", margin: "10px", 
    border: "2px solid red", 
    textAlign :"center", color: "white", 
    textTransform: "uppercase", width: "200px"
    }}>Click me</a> */}
    <a href="" style={style}>Click me</a>
    <a href="" className="click">Click me</a>
    </>
  )
}

export default ButtonComponent