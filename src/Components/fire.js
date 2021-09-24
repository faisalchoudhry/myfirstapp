// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUhVsCmRbu1sBG-W55ebFuOSPPLsmeS7g",
    authDomain: "reactapp-1b2c9.firebaseapp.com",
    projectId: "reactapp-1b2c9",
    databaseURL: "https://reactapp-1b2c9.firebaseio.com",
    storageBucket: "reactapp-1b2c9.appspot.com",
    messagingSenderId: "328793900896",
    appId: "1:328793900896:web:9ea588ff6580fe7b140005",
    measurementId: "G-5JB2GKGKKN"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);


export default fire