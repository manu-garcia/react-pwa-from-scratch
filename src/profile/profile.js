import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Link
} from 'react-router-dom';

import MyBands from './bands';
import MyGenres from './genres';
import MyInstruments from './instruments';

import './profile.scss';
import { fetchProfile } from '../actions/profile.actions';

@connect(store => {
  return {
    profile: store.profile
  }
})
class Profile extends Component {
  
  constructor (props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(fetchProfile());
  }

  render () {

    return (
      <div className="profile-component">
        <div className="profile-box">
          <img className="profile-img"/>
          <div className="stage-name">{this.props.profile.stageName}</div>
          <div className="bio">{this.props.profile.bio}</div>
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
            <Route path={`${this.props.match.url}/mygenres`} render={(props) => (
              <MyGenres genres={this.props.profile.genres} />
            )}/>
            <Route path={`${this.props.match.url}/myinstruments`} render={(props) => (
              <MyInstruments instruments={this.props.profile.instruments} />
            )}/>
          </div>

        </div>
      </div>
    );
  }
}

export default Profile;
