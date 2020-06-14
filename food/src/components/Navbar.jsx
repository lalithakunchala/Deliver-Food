import React from 'react';
import  Styles from './Styles.module.css';
import store from '../redux/store';
import {Link} from 'react-router-dom';
import { isAuth } from '../redux/action';
// import { connect } from "react-redux";
// import { deleteitem, additem,adddish } from '../redux/action';

 class Navbar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {auth} = store.getState();
        console.log(auth);
        return(
            <>
            <div className={Styles.routes}>
                <Link to="/">HOME</Link> 
                <Link to="/login">LOGIN</Link>
                <Link to="/restaurant">RESTAURANT</Link>
                
            </div>
            
            <div>{auth?<button onClick={()=>isAuth()}>Logout</button>:""}</div>
            </>
        )
    }
}

export default Navbar;