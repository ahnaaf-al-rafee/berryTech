import React from "react";

import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

import Divider from "@material-ui/core/Divider";

import MenuIcon from "@material-ui/icons/Menu";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import { SwipeableDrawer } from "@material-ui/core";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utis";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  label: {
    // flexGrow: 1,
    cursor: "pointer",
    color: "white",
    textDecoration: "none",
    marginLeft: "30px",
    marginRight: "30px",
    fontSize: "1.2rem",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  labelSide: {
    color: "black",
    textDecoration: "none",
    fontSize: "1.2rem",
    fontWeight: "900",
    padding: "10px",
  },

  listing: {
    fontSize: "1.2rem",
    listStyleType: "none",
  },

  menuButton: {
    marginRight: theme.spacing(2),
    display: "none",
    [theme.breakpoints.down("lg")]: {
      display: "block",
    },
  },
  logo: {
    flexGrow: 1,
    // display: "none",
    // [theme.breakpoints.up("sm")]: {
    //   display: "block",
    // },
  },

  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  list: {
    width: 250,
    margin: "40px",
  },
  fullList: {
    width: "auto",
  },
}));

export default function Header({ currentUser }) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ul className={classes.listing}>
        <Link to="/">
          <li className={classes.labelSide}>Home</li>
        </Link>
        <Link to="/shop">
          <li className={classes.labelSide}>Shop</li>
        </Link>
        <Link to="/contact">
          <li className={classes.labelSide}>Contact</li>
        </Link>
        {currentUser ? (
          <div className={classes.labelSide} onClick={() => auth.signOut()}>
            <h6>Sign Out</h6>
          </div>
        ) : (
          <Link to="/signin">
            <div className={classes.labelSide}>
              <h6>Sign In</h6>
            </div>
          </Link>
        )}
      </ul>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#00003f", height: "80px" }}
      >
        <Toolbar>
          <div>
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="open drawer"
                  onClick={toggleDrawer(anchor, true)}
                >
                  <MenuIcon />
                </IconButton>
                <SwipeableDrawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                >
                  {list(anchor)}
                </SwipeableDrawer>
              </React.Fragment>
            ))}
          </div>

          <div className={classes.logo}>
            <Logo />
          </div>

          <Link to="/">
            <div className={classes.label}>
              <h6>Home</h6>
            </div>
          </Link>
          <Link to="/shop">
            <div className={classes.label}>
              <h6>Shop</h6>
            </div>
          </Link>
          <Link to="/contact">
            <div className={classes.label}>
              <h6>Contact</h6>
            </div>
          </Link>
          {currentUser ? (
            <div>
              <h6>Welcome {currentUser.displayName}</h6>
              <div className={classes.label} onClick={() => auth.signOut()}>
                <h6>Sign Out</h6>
              </div>
            </div>
          ) : (
            <Link to="/signin">
              <div className={classes.label}>
                <h6>Sign In</h6>
              </div>
            </Link>
          )}

          {currentUser ? (
            <div>
              <img
                style={{
                  float: "right",
                  borderRadius: "100px",
                  height: "450%",
                  width: "45%",
                }}
                src={currentUser.photoURL}
                alt=""
              />
            </div>
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  );
}
