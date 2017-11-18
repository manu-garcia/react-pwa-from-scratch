import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// http://gorangajic.github.io/react-icons/index.html
import FaLogo from 'react-icons/lib/fa/circle';
import FaPublish from 'react-icons/lib/fa/leanpub';
import FaProfile from 'react-icons/lib/fa/user';
import FaSearch from 'react-icons/lib/fa/search';

import './appnav.scss';

class AppNav extends Component {
  render() {
    return (
      <div className="app-nav-component">
        <div className="logo-box">
          <span><Link to="/"><FaLogo className="logo" /></Link></span>
        </div>

        <div className="nav-box">
          <span><Link to="/profile"><FaProfile className="nav-opt"/></Link></span>
          <span><Link to="/publish"><FaPublish className="nav-opt"/></Link></span>
          <span><Link to="/search"><FaSearch className="nav-opt"/></Link></span>
        </div>

      </div>
    );
  }
}

export default AppNav;
