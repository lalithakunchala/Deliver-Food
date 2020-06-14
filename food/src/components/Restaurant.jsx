import React from 'react';
import store from '../redux/store';
import Header from './Header';
import { connect } from "react-redux";
import { deleteitem, additem,adddish ,ordermore,orderless,itemSearch,isAuth,isAdmin} from '../redux/action';

class Restaurant extends  React.Component{
    constructor(props){
        super(props)
        this.state = {
            admin:false
        }
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };
    
      handleAuth = () => {
        if (this.state.name === "admin" && this.state.password === "admin") {
          this.setState({
            admin: !this.state.admin
          });
        }
        else{
          alert("Enter correct details")
        }
      };
      handleAdd = product => {
        console.log("item");
        this.setState({
          data: [...this.state.data, product]
        });
      };
    
      render() {
        const {auth} = store.getState();
        const {additem, deleteitem,ordermore,orderless,itemSearch,isAuth} = this.props;
        console.log(this.state.data);
        return (
          <div>
            <Header />
            {this.state.admin ? (
              <div style={{textAlign:"center"}}>
                <h1>Restaurant Login</h1>
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  placeholder="name"
                  onChange={this.handleChange}
                />
                <br/>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  placeholder="password"
                  onChange={this.handleChange}
                />
                <br/>
                <button name ={this.state.auth} onClick={(e)=>isAuth(e.target.name)}>Login</button>
              </div>
            ) : (
              
                <>
                <input type="text" placeholder="item"></input>
                <input type="text" placeholder="price"></input>
                <input type="text" placeholder="cost for Two"></input>
                <input type="text" placeholder="restaurant"></input>
                <input type="text" placeholder ="image"></input>
                <button name = {this.state.admin} onClick = {(e)=>isAdmin(e.target)}>SUBMIT</button>
                </>
            )}
          </div>
        );
      }
    
}

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
    itemSearch : item => dispatch(itemSearch(item)),
    isAuth :item => dispatch(isAuth(item)),
    isAdmin : item => dispatch(isAdmin(item))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Restaurant);
