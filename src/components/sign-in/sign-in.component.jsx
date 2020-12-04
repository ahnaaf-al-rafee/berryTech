import React from "react";

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
          <input
            name="email"
            type="email"
            required
            value={this.state.email}
            onChange={(event) => this.setState({ email: event.target.value })}
          />
          <input
            name="password"
            type="password"
            required
            value={this.state.password}
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default SignIn;
