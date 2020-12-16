import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.css";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password doesn't match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div>
        <h2>I Don't Have an Account</h2>
        <span>Create an account with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            value={displayName}
            onChange={(event) =>
              this.setState({ displayName: event.target.value })
            }
            label="Display Name"
            required
          />
          <FormInput
            name="email"
            type="email"
            value={email}
            onChange={(event) => this.setState({ email: event.target.value })}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
            label="Password"
            required
          />
          <FormInput
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(event) =>
              this.setState({ confirmPassword: event.target.value })
            }
            label="confirmPassword"
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
