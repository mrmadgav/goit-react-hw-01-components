import React from "react";
import PropTypes from "prop-types";
import "./FriendList.css";

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map((item) => (
      <li className="friend-item" key={item.id}>
        <img className="friends-avatar" src={item.avatar} alt="" width="48" />
        <span className={item.isOnline ? "green" : "red"}>&#11044;</span>
        <p className="friend-name">{item.name}</p>
      </li>
    ))}
  </ul>
);
export default FriendList;

FriendList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
