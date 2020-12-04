import React from "react";
import FormInput from "../form-input/form-input.component";

import "./sign-in.styles.css";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  render() {
    const handleSubmit = (event) => {
      event.preventDefault();

      this.setState({
        email: "",
        password: "",
      });
    };
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            type="email"
            required
            value={this.state.email}
            handleChange={(event) =>
              this.setState({ email: event.target.value })
            }
            label="email"
          />
          <FormInput
            name="password"
            type="password"
            required
            value={this.state.password}
            handleChange={(event) =>
              this.setState({ password: event.target.value })
            }
            label="password"
          />
          <FormInput type="submit" />
        </form>
      </div>
    );
  }
}

export default SignIn;
