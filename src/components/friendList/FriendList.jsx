import React from "react";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map((item) => (
      <li className="item" key={item.id}>
        <span className={item.isOnline ? "green" : "red"}></span>
        <img className="avatar" src={item.avatar} alt="" width="48" />
        <p className="name">{item.name}</p>
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
