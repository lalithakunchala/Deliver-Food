import React, { Component } from "react";
import { connect } from "react-redux";

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        email: "",
        password: ""
      }
    };
  }

  submitForm = e => {
    e.preventDefault();
    this.props.dispatch({
      type: "SUBMIT_FORM"
    });
  };

  handleInputChange = e =>
    this.setState(
      {
        values: { ...this.state.values, [e.target.name]: e.target.value }
      },
      () =>
        this.props.dispatch({
          type: "SET_FORMVALUES",
          payload: this.state.values
        })
    );

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <div className="input-group">
            <label htmlFor="email">E-mail Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={this.state.values.email}
              onChange={this.handleInputChange}
              title="Email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={this.state.values.password}
              onChange={this.handleInputChange}
              title="password"
              required
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
        {/* <div className="message">
          {this.props.message.length > 0 && this.props.message}
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.message
});

export default connect(mapStateToProps)(SignInForm);