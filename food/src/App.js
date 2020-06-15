import React from 'react';
import './App.css';
import { connect } from "react-redux";
import store from './redux/store';
import Navbar from './components/Navbar';
import Routes from './components/Routes';
import Header from './components/Header';
import User from './components/User';
import SignInForm from "./components/SignInForm";
import Button from "./components/Button";
import { deleteitem, additem,adddish } from './redux/action';
import {BrowserRoute} from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
      console.log(store.getState())
      const {dishes} = store.getState();
    return (
      
      <div>
        
        <Routes/>                                                                  
      </div>
    );
  }
}

const mapStateToProps = state => ({
  order: state.order,
  dishes:state.dishes
});

const mapDispatchToProps = dispatch => ({
  add: item => dispatch(adddish(item)),
  remove: item => dispatch(deleteitem(item)),
  complete: item => dispatch(additem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);