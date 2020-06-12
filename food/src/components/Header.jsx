import React from 'react';
import Styles from './Styles.module.css';
import Navbar from './Navbar';

export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            
            <div className={Styles.header}>
                Delicious Food
                <Navbar/>
            </div>
            
        )
    }
} 