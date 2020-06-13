import React from 'react';
import {Link} from 'react';

export default class Navbar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Link to="/" >HOME</Link>
                <Link to="/" >LOGIN</Link>
                <Link to="/" >SIGN UP</Link>
                <Link to="/" >RESTAURANT</Link>
                <input type="search" placeholder="restaurant"></input>
                <button >Search</button>
            </div>
        )
    }
}