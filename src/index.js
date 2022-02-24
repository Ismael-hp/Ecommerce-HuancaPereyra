import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCgUEwxYjink2wF4qDJQj2JaafBnCJk-y4",
  authDomain: "ecommerce-huancapereyra.firebaseapp.com",
  projectId: "ecommerce-huancapereyra",
  storageBucket: "ecommerce-huancapereyra.appspot.com",
  messagingSenderId: "74298751185",
  appId: "1:74298751185:web:1ed2ba21b2b6860f6dedf0"
};
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
