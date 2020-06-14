import React from 'react';
import Home from './Home';
import store from '../redux/store';
import Header from './Header';
import { connect } from "react-redux";
import { deleteitem, additem,adddish ,ordermore,orderless,itemSearch,isAuth} from '../redux/action';



 class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Auth:false,
        name :"",
        password:""
      };
    }
    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
  
    handleAuth = () => {
      if (this.state.name === "lalitha" && this.state.password === "admin") {
        this.setState({
          Auth: !this.state.Auth
        });
      }
      else{
        alert("Enter correct details")
      }
    };
    
  
    render() {
      const {auth} = store.getState();
      const {additem, deleteitem,ordermore,orderless,itemSearch,isAuth} = this.props;
      const {Auth} = this.state;
      const obj = {
        name:this.state.name,
        password:this.state.password
      }
      console.log(Auth);
      return (
        <div>
          <Header />
          
            <div style={{textAlign:"center"}}>
              <h1>Login</h1>
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
              <button id={Auth} onClick={(e)=>isAuth(e.target.id),this.handleAuth}>Login</button>
            </div>
          
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
    isAuth :item => dispatch(isAuth(item))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);