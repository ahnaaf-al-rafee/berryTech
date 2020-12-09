import React from "react";
import { StyledFirebaseAuth } from "react-firebaseui";

import { auth, uiConfig } from "../../firebase/firebase.utis";

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
        <div>
          <h1 style={{ textAlign: "center" }}>I already have an account</h1>
          <h4 style={{ textAlign: "center" }}>
            Sign in with your email and password
          </h4>
        </div>
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
        </form>

        <h4 style={{ textAlign: "center" }}>Or</h4>
        <br />
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </div>
    );
  }
}

export default SignIn;
