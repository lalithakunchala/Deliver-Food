import React from 'react';
import store from '../redux/store';
import Styles from './Styles.module.css';
import Header from './Header';
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import { deleteitem, additem,adddish ,ordermore,orderless,itemSearch} from '../redux/action';

class Items extends React.Component{
    constructor(props){
        super(props)
        
    }
    render(){
        const {dishes,order,item} = store.getState();
        console.log(store.getState());
        const {additem, deleteitem,ordermore,orderless,itemSearch} = this.props;
       
        return(
          
            <>
            
            { order&&
            <>
            <div style={{float:"right",paddingRight:"30px"}}>{order.length}</div><br/>
            <Link to="/order"><img className={Styles.cart} src="https://img.icons8.com/pastel-glyph/2x/shopping-cart.png"/></Link>
            </>
            } 
            <div className={Styles.restcard}>
            
            {dishes.filter((ele,index)=>{
              console.log(ele.item , item)
              return ele.item ===item
            })
              .map(item=>(

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
                <button id={item.id}onClick ={(e)=>additem(e.target.id)}class="card-link text-white bg-primary">Order</button>
                {/* <a href="#" class="card-link">Another link</a> */}
                </div>
                </div>
                  
                    
            ))}   
            </div>         
            
            </>
                  )}}

        const mapStateToProps = state => ({
            order: state.order,
            dishes:state.dishes
          });
          
          const mapDispatchToProps = dispatch => ({
            ordermore: item => dispatch(ordermore(item)),
            orderless: item => dispatch(orderless(item)),
          adddish: item => dispatch(adddish(item)),
          deleteitem: item => dispatch(deleteitem(item)),
          additem : item => dispatch(additem(item)), 
            itemSearch : item => dispatch(itemSearch(item))
          });
          
          export default connect(
            mapStateToProps,
            mapDispatchToProps
          )(Items);