import React from 'react';
import  Styles from './Styles.module.css';
import {Link} from 'react-router-dom';
// import { connect } from "react-redux";
// import { deleteitem, additem,adddish } from '../redux/action';

 class Navbar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className={Styles.routes}>
                <Link to="/">HOME</Link> 
                <Link to="/login">LOGIN</Link>
                <Link to="/restaurant">RESTAURANT</Link>
            </div>
        )
    }
}

export default Navbar;