import React from 'react';
import './App.css';
import Header from './components/Header'
import {Provider} from 'react-redux';
import Routes from './components/Routes';


function App() {
  return (
    <div>
      {/* <h1>Deliver Food</h1> */}
      <Header/>
      <Routes/>
    </div>
  );
}

export default App;