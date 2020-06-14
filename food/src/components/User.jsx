import React from 'react';
import store from '../redux/store';
import Styles from './Styles.module.css';
import Header from './Header';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import { restaurant,itemSearch} from '../redux/action';


class User extends React.Component{
    constructor(props){
        super(props)
        this.state={
            category:""
        }
        
    }
    handleChange =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        }) 
     }

    render(){
        const {dishes,name} = store.getState();
        const {restaurant,itemSearch} = this.props
        

        return(
        <div>
            
            <Header/>

            <div style={{marginLeft:"1400px",padding:"20px"}}>
                <input name="category" value = {this.state.category} className={Styles.search} onChange={this.handleChange} type="search" placeholder="category"></input>
                <Link to="/items"><button name={this.state.category} className={Styles.bordr} onClick={(e)=>itemSearch(e.target.name)}>Search</button>
                </Link>
            </div>
            
            <h1 style={{textAlign:"center"}}>Restaurants</h1>
            <div  className={Styles.rest} >
            <Link to="/specific"><div  ><img name="Taj" onClick = {(e)=>restaurant(e.target.name)} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-ThabQf7JA_jwGOGptcl_qarXXcoqFmyn4xIR5zcUFyZ9L7uk&usqp=CAU" alt ="Taj"></img>Taj</div></Link>
            <Link to="/specific"><div  ><img name="suprabhat" onClick = {(e)=>restaurant(e.target.name)} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT11RvnRkgyvFBiHCR_2y3Mpk9yViFcEhNrr1Smv0i4sjHW__h2&usqp=CAU" alt ="suprabhat"></img><span>Suprabhat</span></div></Link>
            <Link to="/specific"><div  ><img name="Rhaghavendra" onClick = {(e)=>restaurant(e.target.name)} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMBDr3-68DrF1LanM69vnv-vLLPFGrZICfOguYdpCaDpoW6fBl&usqp=CAU" alt ="Raghavendra"></img>Rhaghavendra</div></Link>
            <Link to="/specific"><div  ><img name="krishna" onClick = {(e)=>restaurant(e.target.name)} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3AlkP-zB5eI1d3n6VALZgZxBHCN2JWpjynIM9MbbtSI_3Uy7a&usqp=CAU" alt ="Krishna"></img>Krishna</div></Link>
            </div>
            {/* <h1 style={{textAlign:"center",padding:"10px",margin:"20px"}}>Login to order</h1>
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
                </div>          */}
        </div>
        )
    }
}

const mapStateToProps = state => ({
    name: state.name,
    dishes:state.dishes
  });
  
  const mapDispatchToProps = dispatch => ({
      
    restaurant : item => dispatch(restaurant(item)),
    itemSearch : item => dispatch(itemSearch(item))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(User);