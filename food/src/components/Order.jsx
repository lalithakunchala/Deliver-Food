import React from 'react';
import store from '../redux/store';
import Styles from './Styles.module.css';
import Header from './Header';
import { connect } from "react-redux";
import { deleteitem, additem,adddish } from '../redux/action';

export default class Order extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {order} = store.getState();
        return(
        <>
            <Header/>
            <div className={Styles.restcard}>
                
                {order.map(item=>(

                    <div class="card" style={{width: "22rem"}}>
                    <img class="card-img-top" src={item.img} alt="Card image cap"/>
                    <div class="card-body">
                    <h2 class="card-title">{item.restaurant}</h2>
                    <h3 class="text-primary">{item.item}</h3>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    </div>
                    <ul class="list-group list-group-flush">
                <li class="list-group-item">cost for Two:{item.costtwo}</li>
                <li class="list-group-item">Rating:{item.rating}</li>
                    
                    </ul>
                    <div class="card-body">
                    <button id={item.id}onClick ={(e)=>deleteitem(e.target.id)}class="card-link text-white bg-primary">Remove Order</button>
                    {/* <a href="#" class="card-link">Another link</a> */}
                    </div>
                    </div>
                      
                        
                ))}   
                </div>         
        </>
        )}}