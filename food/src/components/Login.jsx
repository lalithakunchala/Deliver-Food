import React from 'react';
import Home from './Home';

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
      if (this.state.name === "admin" && this.state.password === "admin") {
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
          {isAuth ? (
            <div>
              <h1>Login</h1>
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
              <button onClick={this.handleAuth}>ADD</button>
            </div>
          ) : (
            
              <Home />
          )}
        </div>
      );
    }
  }