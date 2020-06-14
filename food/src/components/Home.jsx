import React from 'react';
import store from '../redux/store';
import Styles from './Styles.module.css';
import { connect } from "react-redux";
import { deleteitem, additem,adddish,restaurant } from '../redux/action';
import {Link} from "react-router-dom";


 class Home extends React.Component{
        constructor(props){
            super(props)
        }
        render(){

            console.log(store.getState());
            const {dishes,order,name} = store.getState();
            const {additem, deleteitem} = this.props;

            return (
                <>
                
                { order&&
                <>
                <div style={{float:"right",paddingRight:"30px"}}>{order.length}</div><br/>
                <Link to="/order"><img className={Styles.cart} src="https://img.icons8.com/pastel-glyph/2x/shopping-cart.png"/></Link>
                </>
                } 
                <div className={Styles.restcard}>
                
                {dishes.map(item=>(

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
               ) 
        }
    
    
}

const mapStateToProps = state => ({
    order: state.order,
    dishes:state.dishes,
    restaurant:state.restaurant
  });
  
  const mapDispatchToProps = dispatch => ({
    restaurant : item => dispatch(restaurant(item)),
    additem : item => dispatch(additem(item))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home);
