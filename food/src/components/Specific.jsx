import React from 'react';
import store from '../redux/store';

class Specific extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(store.getState())
        const {name,dishes} = store.getState();
        return(
            <div>
                {name}
                {dishes.filter((ele,index)=>{
                    return ele.restaurant === name
                }).map((ele,index)=>(
                    <>
                <div>{ele.item}</div>
                
                </>
                ))}
            </div>
        )
    }
}

export default Specific
