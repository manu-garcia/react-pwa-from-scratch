import React, { Component } from 'react';
import FaProfile from 'react-icons/lib/fa/user';

import './profile.scss';

class Profile extends Component {
  render () {
    return (
      <div className="profile-component">
        <div className="profile-box">
          <img className="profile-img"/>
          <div className="stage-name">Stage name</div>
          <div className="bio">Bio...</div>
        </div>
        <div className="profile-nav">
          <div>My bands</div>
          <div>My Genres</div>
          <div>My Instruments</div>
        </div>
      </div>
    );
  }
}

export default Profile;
