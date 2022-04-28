import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import firebase from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyDlcu4EkGBg-7Qff6lAGp2EOTjLx69nYLg",
  authDomain: "firelogin-72fda.firebaseapp.com",
  projectId: "firelogin-72fda",
  storageBucket: "firelogin-72fda.appspot.com",
  messagingSenderId: "344618118786",
  appId: "1:344618118786:web:92fa1f0dbca9d656e40e9b",
  measurementId: "G-M4M1TKYFE9"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
