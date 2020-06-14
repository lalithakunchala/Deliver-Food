import React from 'react';
import Header from './Header';

class Restaurant extends  React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Header/>
                <input type="text" placeholder="item"></input>
                <input type="text" placeholder="price"></input>
                <input type="text" placeholder="cost for Two"></input>
                <input type="text" placeholder="restaurant"></input>
                <input type="text" placeholder ="image"></input>
            </div>
            
        )
    }
}
export default Restaurant;