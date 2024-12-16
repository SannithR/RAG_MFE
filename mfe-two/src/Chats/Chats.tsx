import PropTypes from "prop-types";
import React from "react";
import "./chats.css";

interface Props {
  property: "select";
  className: any;
}

export const Chats = ({ property, className }: Props): JSX.Element => {
  return (
    <div className={`chats ${className}`}>
      <div className="supporting-text">New Chat</div>
    </div>
  );
};

Chats.propTypes = {
  property: PropTypes.oneOf(["select"]),
};
