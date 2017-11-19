import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom';

import MyBands from './my-bands';
import MyGenres from './my-genres';
import MyInstruments from './my-instruments';

import './profile.scss';

class Profile extends Component {
  
  constructor (props) {
    super(props);
  }

  render () {

    return (
      <div className="profile-component">
        <div className="profile-box">
          <img className="profile-img"/>
          <div className="stage-name">Stage name</div>
          <div className="bio">Bio...</div>
        </div>
        <div className="profile-content">
          <div className="profile-nav">
            <ul>
              <li><Link to={`${this.props.match.url}/mybands`}>My bands</Link></li>
              <li><Link to={`${this.props.match.url}/mygenres`}>My Genres</Link></li>
              <li><Link to={`${this.props.match.url}/myinstruments`}>My Instruments</Link></li>
            </ul>
          </div>

          <div className="profile-body">
            <Route path={`${this.props.match.url}/mybands`} component={MyBands}/>
            <Route path={`${this.props.match.url}/mygenres`} component={MyGenres}/>
            <Route path={`${this.props.match.url}/myinstruments`} component={MyInstruments}/>
          </div>

        </div>
      </div>
    );
  }
}

export default Profile;
