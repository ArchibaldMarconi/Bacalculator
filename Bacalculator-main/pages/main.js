const firebaseConfig = {
    apiKey: "AIzaSyBdH0GzSV9H4UUSNyUCUBF6296KTLQdSOE",
    authDomain: "bacalculator-fa969.firebaseapp.com",
    databaseURL: "https://bacalculator-fa969-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "bacalculator-fa969",
    storageBucket: "bacalculator-fa969.appspot.com",
    messagingSenderId: "937306446268",
    appId: "1:937306446268:web:2aea904c8002748d5173b9",
    measurementId: "G-VRGK2PDMM2"
  };


let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");

let getButtons = (e) => e.preventDefault()

let changeForm = (e) => {

    switchCtn.classList.add("is-gx");
    setTimeout(function(){
        switchCtn.classList.remove("is-gx");
    }, 1500)

    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");

    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z200");
}

let mainF = (e) => {
    for (var i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener("click", getButtons );
    for (var i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm)
}

window.addEventListener("load", mainF);