let hellos = document.getElementById("hello");
hellos.style.color = "red";
hellos.style.fontSize = "50px";

// Accessing DOM Elements
// 1st document.getElementById()
document.getElementById("demo").innerHTML = "Hello World from id";
// 2nd document.getElementsbyClassName()
document.getElementsByClassName("demo")[0].textContent =
  "Hello World from class";
// 3rd document.getElementsByTagName()
document.getElementsByTagName("p")[1].innerHTML =
  "Hello World from tag selector";
// 4th document.querySelector()
document.querySelector("h2").innerHTML = "Hello World from querySelector";
// 5th document.querySelectorAll()
document.querySelectorAll("p")[2].innerHTML =
  "Hello World from querySelectorAll";

//element edit -> innerHTML , textContent, document.write()

//setAttribute(): Sets the value of an attribute.
// getAttribute(): Gets the value of an attribute.
// removeAttribute(): Removes an attribute.
// let abc = document.getElementById("demo");
// abc.setAttribute("class", "demo");
// abc.setAttribute("id", "demo");
// abc.removeAttribute("class");
// abc.removeAttribute("id");
// Modifying Styles:\ -> style.css
// create a new elwmwnt

