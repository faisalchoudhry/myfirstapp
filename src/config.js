import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDUhVsCmRbu1sBG-W55ebFuOSPPLsmeS7g",
    authDomain: "reactapp-1b2c9.firebaseapp.com",
    projectId: "reactapp-1b2c9",
    databaseURL: "https://reactapp-1b2c9.firebaseio.com",
    storageBucket: "reactapp-1b2c9.appspot.com",
    messagingSenderId: "328793900896",
    appId: "1:328793900896:web:9ea588ff6580fe7b140005",
    measurementId: "G-5JB2GKGKKN"
});

export default firebaseConfig;
