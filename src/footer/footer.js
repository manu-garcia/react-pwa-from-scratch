import React, { Component } from 'react';

import './footer.scss';

class Footer extends Component {

  /**
   * Render a user welcome message if user is present
   * 
   */
  welcome() {
    if (this.props.user.displayName) {
      return <div>Welcome {this.props.user.displayName}</div>
    }
  }

  render () {
    return (
      <div className="footer">
        <div>
          {this.welcome()}
          <span># React PWA @2017</span>
        </div>
      </div>
    );
  }
}

export default Footer;
