import React from "react";

import {
  SignInWithFacebook,
  SignInWithGithub,
  SignInWithGoogle,
  SignInWithTwitter,
} from "../../firebase/firebase.utis";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";

import { GrGoogle } from "react-icons/gr";

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
          <CustomButton type="submit">Sign In</CustomButton>
          <br />
          <h4 style={{ textAlign: "center" }}>Or</h4>
          <hr />
          <br />
          <CustomButton onClick={SignInWithGoogle} isGoogle>
            <div>
              <GrGoogle />
              Sign In With Google
            </div>
          </CustomButton>
          <CustomButton onClick={SignInWithFacebook} isFacebook>
            <div>
              <FacebookIcon /> Sign In With Facebook
            </div>
          </CustomButton>
          <CustomButton onClick={SignInWithTwitter} isTwitter>
            <div>
              <TwitterIcon />
              Sign In With Twitter
            </div>
          </CustomButton>
          <CustomButton onClick={SignInWithGithub} isGithub>
            <div>
              <GitHubIcon />
              Sign In With Github
            </div>
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
