import React from 'react';
import store from '../redux/store';
import Styles from './Styles.module.css';
import Header from './Header';

export default class User extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {dishes} = store.getState();
        return(
        <div>
            
            <Header/>
            <h1 style={{textAlign:"center",padding:"10px",margin:"20px"}}>Login to order</h1>
            <div className={Styles.restcard}>
                {dishes.map(item=>(

                    <div class="card" style={{width: "22rem"}}>
                    <img class="card-img-top" src={item.img} alt="Card image cap"/>
                    <ul>
                <li class="list-group-item">Price:{item.price}</li>
                <li class="list-group-item">Rating:{item.rating}</li>
                    
                    </ul>
                    </div>
                      
                        
                ))}   
                </div>         
        </div>
        )
    }
}