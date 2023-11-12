//cambio de imagen

let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "./img/LogoMozilla1.png") {
    myImage.setAttribute("src", "./img/LogoMozilla.png");
  } else {
    myImage.setAttribute("src", "./img/LogoMozilla1.png");
  }
};

//Colocar Mensaje de codigo

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name to change the header of the Page");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "Mozilla is cool, " + myName;
  }
}

setTimeout(setUserName, 5000);

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.innerHTML = "Mozilla is cool, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};


