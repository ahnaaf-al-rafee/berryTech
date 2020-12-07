import React from "react";

import "./custom-button.styles.css";

const CustomButton = ({
  isGoogle,
  isTwitter,
  isGithub,
  isFacebook,
  children,
  ...otherProps
}) => (
  <div>
    <button
      className={`${isGoogle ? "google-button" : ""} ${
        isTwitter ? "twitter-button" : ""
      } ${isGithub ? "github-button" : ""} ${
        isFacebook ? "facebook-button" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  </div>
);

export default CustomButton;
