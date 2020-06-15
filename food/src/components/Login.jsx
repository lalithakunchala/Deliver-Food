import React from 'react';
import Home from './Home';
import store from '../redux/store';
import Header from './Header';
import { connect } from "react-redux";
import SignInForm from "./SignInForm";
import Button from "./Button";
import { deleteitem, additem,adddish ,ordermore,orderless,itemSearch,isAuth} from '../redux/action';



 class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // Auth:false,
        name :"",
        password:""
      };
    }
    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      },
      () =>
        this.props.dispatch({
          type: "USERNAME",
          payload: this.state.values
        })
    )
      };
  
    // handleAuth = (e) => {
    //   e.preventDefault();
    //   // if (this.state.name === "lalitha" && this.state.password === "admin") {
    //   //   this.setState({
    //   //     Auth: !this.state.Auth
    //   //   });
    //   // }
    //   // else{
    //   //   alert("Enter correct details")
    //   // }
    //   isAuth(e.target)
    // };
    
  
    render() {
      const {auth} = store.getState();
      const {additem, deleteitem,ordermore,orderless,itemSearch,isAuth} = this.props;
      console.log(auth);
      
      return (
        <div>
          <Header />
          <SignInForm />
            <Button/>
          
            
              {/* <form>
              <input
                type="text"
                name="name"
                value={this.state.name}
                placeholder="name"
                onChange={this.handleChange}
              />
              
              <input
                type="password"
                name="password"
                value={this.state.password}
                placeholder="password"
                onChange={this.handleChange}
              />
              <input type="submit"  >Login</input>
              </form> */}
          
          {/* <form onSubmit={(e)=>isAuth(e.target)}>
      <div className="main">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
      </div>
      
      <div className="main">
        <label >Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your Password"
          value={this.state.password}
          onChange={this.handleChange}
        />
      </div>
      
      <div className="button">
        <button type="submit">Submit</button>
      </div>
    </form>*/}
          
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
    // username:item => dispatch(username(item))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);