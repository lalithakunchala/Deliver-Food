import React from 'react';
import store from '../redux/store';
import Styles from './Styles.module.css';
import Header from './Header';
import { connect } from "react-redux";
import { deleteitem, additem,adddish ,ordermore,orderless} from '../redux/action';

class Order extends React.Component{
    constructor(props){
        super(props)
        
    }
    render(){
        const {order} = store.getState();
        console.log(store.getState());
        const {additem, deleteitem,ordermore,orderless} = this.props;
        return(
        <>
            <Header/>
            <div className={Styles.restcard}>
                
                {order.map((item,index)=>(

                    <div key ={index} class="card" style={{width: "22rem"}}>
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
                    <button id={item.id} onClick ={(e)=>deleteitem(e.target.id)}class="card-link text-white bg-primary">Remove Order</button>
                    {/* <a href="#" class="card-link">Another link</a> */}
                    {/* <labe>Quantity</labe> */}
                    <div><h4>Quantity:{item.quantity}<span><br/></span>Price:{item.total}</h4></div>

                    <button id={item.id} onClick ={(e)=>ordermore(e.target.id)}class="card-link text-white bg-primary">+</button>
                    {item.quantity>1?
                    <button id={item.id} onClick ={(e)=>orderless(e.target.id)}class="card-link text-white bg-primary">-</button>:null}
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
            additem : item => dispatch(additem(item))
          });
          
          export default connect(
            mapStateToProps,
            mapDispatchToProps
          )(Order);