import React from 'react';

export default class Navbar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <button>Home</button>
                <button>Login</button>
                <button>Sign up</button>
                <button>Restaurant</button>
            </div>
        )
    }
}