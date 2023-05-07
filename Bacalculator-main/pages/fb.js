// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js'
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase, ref, set, onValue, get, child} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
//import * as Crypto from 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const submitButton = document.getElementById('registerSubmit')
const submitLogin = document.getElementById('loginSubmit')
const provider = new getAuth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getDatabase();

const full_name = document.getElementById('signName')
const username = document.getElementById('signUsername')
const email = document.getElementById('signMail')
const password = document.getElementById('signPassword')

const logUsername = document.getElementById('loginUsername')
const logPassword = document.getElementById('loginPassword')

const googleSvg = document.getElementById("googlesvg")
const currentUser = null

function register(){
  if (!Validation()){
    return;
  }
  const dbRef = ref(db)

  get(child(dbRef, "UsersList/" + username.value)).then((snapshot)=>{
    if(snapshot.exists()){
      alert("Votre compte existe déja")
    } else{
      set(ref(db, "UsersList/" + username.value),
      {
        fullname: full_name.value,
        username: username.value,
        email: email.value,
        password: password.value
      })
      .then(()=>{
        alert("Utilisateur créé");
      })
      .catch(()=>{
        alert("error" + error)
      })
    }
  })
}

submitButton.addEventListener('click', register)

function isEmptyOrSpaces(str){
  return str === null || str.match(/^ *$/) !== null;
}

function Validation(){
  let nameregex = /^[a-zA-Z\s]+$/;
  let emailreg = /^[a-zA-Z0-9]+@(gmail|outlook|yahoo)\.com$/;
  let userregex = /^[a-zA-Z0-9]{5,}$/;

  if(isEmptyOrSpaces(username.value) || isEmptyOrSpaces(password.value) || isEmptyOrSpaces(email.value)){
    alert("Vous ne pouvez pas laissez de champs vides.")
    return false
  }

  if(!nameregex.test(full_name.value)){
    alert("Votre nom ne peut contenir que des lettres.")
    return false;
  }

  if(!emailreg.test(email.value)){
    alert("Entrez une adresse Email Valide.")
    return false;
  }

  if(!userregex.test(username.value)){
    alert("Votre nom d'utilisateur ne peut contenir que des caractères alphanumériques, sans espaces et plus de 5 caractères.")
    return false;
  }

  return true
}

//function encPass(){
  //var pass12 = Crypto.AES.encrypt(password.value, password.value)
  //return pass12.toString()
//}

//function decPass(dbpass){
  //var pass12 = Crypto.AES.decrypt(dbpass, logPassword.value)
  //return pass12.toString(Crypto.enc.Utf8)
//}

function login(user){
  let keepLoggedIn = document.getElementById("checkbox-circle2").checked;

  if(!keepLoggedIn){
    sessionStorage.setItem('user', JSON.stringify(user));
    window.location("index.html")
  }

  else{
    localStorage.setItem('keepLoggedIn', 'yes');
    localStorage.setItem('user', JSON.stringify(user));
    window.location('user')
  }
}