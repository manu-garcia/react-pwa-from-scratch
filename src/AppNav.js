import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// http://gorangajic.github.io/react-icons/index.html
import FaHome from 'react-icons/lib/fa/home';
import FaProfile from 'react-icons/lib/fa/user';
import FaSearch from 'react-icons/lib/fa/search';

import './App.scss';

class AppNav extends Component {
  render() {
    return (
      <div>
        <ul className="App-nav">
          <li><Link to="/activity"><FaHome /></Link></li>
          <li><Link to="/profile"><FaProfile /></Link></li>
          <li><Link to="/search"><FaSearch /></Link></li>
        </ul>
      </div>
    );
  }
}

export default AppNav;
