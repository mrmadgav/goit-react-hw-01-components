import React from "react";
import PropTypes from "prop-types";
import "./Profile.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <div className="profile-description">
        <img src={avatar} alt="Аватар пользователя" className="avatar" />
        <p className="profile-name">{name}</p>
        <p className="profile-tag">Nick: @{tag}</p>
        <p className="location">{location}</p>
      </div>
      <div className="profile-stats-div">
        <ul className="profile-stats">
          <li className="profile-elem">
            <span className="profile-label">Followers </span>
            <span className="profile-quantity">{stats.followers}</span>
          </li>
          <li className="profile-elem">
            <span className="profile-label">Views </span>
            <span className="profile-quantity">{stats.views}</span>
          </li>
          <li className="profile-elem">
            <span className="profile-label">Likes </span>
            <span className="profile-quantity">{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;

Profile.defaultProps = {
  avatar:
    "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
