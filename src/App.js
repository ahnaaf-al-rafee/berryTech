import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header.component";
import {
  auth,
  createUserProfileDocument,
  firebaseAnalytics,
} from "./firebase/firebase.utils";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import AllPosts from "./components/blog/allPosts/allPost.component";
import SinglePost from "./components/blog/singlePost/singlePost.component";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    firebaseAnalytics.logEvent("homepage_visited");
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (authUser) => {
      const userRef = await createUserProfileDocument(authUser);

      if (authUser) {
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser({ currentUser: authUser });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/blog" component={AllPosts} />
          <Route path="/blog/:slug" component={SinglePost} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
