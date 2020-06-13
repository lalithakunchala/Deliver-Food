import React from 'react';
import Home from './Home';
import Header from './Header';

export default class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isAuth: true,
        name: "",
        password: "",
        item: "",
        data: []
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
          isAuth: !this.state.isAuth
        });
      }
    };
    handleAdd = product => {
      console.log("item");
      this.setState({
        data: [...this.state.data, product]
      });
    };
  
    render() {
      const { isAuth } = this.state;
      console.log(this.state.data);
      return (
        <div>
          <Header />
          {isAuth ? (
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
              <button onClick={this.handleAuth}>Login</button>
            </div>
          ) : (
            
              <Home/>
          )}
        </div>
      );
    }
  }