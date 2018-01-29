import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch  
} from 'react-router-dom';

import * as firebase from 'firebase';

import store from './store';
import AppNav from './appnav';
import Footer from './footer/footer';

import Loadable from 'react-loadable';

import './app.scss';
function Loading() {
  return <div>Loading...</div>;
};

const Publish = Loadable({
  loader: () => import(/* webpackChunkName: "publish" */'./publish/publish'),
  loading: Loading,
});

const Profile = Loadable({
  loader: () => import(/* webpackChunkName: "profile" */'./profile/profile'),
  loading: Loading,
});

const Search = Loadable({
  loader: () => import(/* webpackChunkName: "search" */'./search/search'),
  loading: Loading,
});

class App extends Component {

  constructor () {
    super();

    // Authentication managed by Firebase
    this.user;
    this.auth;
    this.database;

    this.state = {
      userLoggedIn: false,
    };

    // This bind is necesary to be invoked from the view
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLoginWithGoogleClick = this.handleLoginWithGoogleClick.bind(this);

  }

  /**
   * Component initialisation. This is temporary as part of the first Firebase integration
   */
  componentDidMount() {
    
    this.initFirebase ();

  }
    

  /**
   * Firebase services initialisation
   */
  initFirebase () {
    
    // Firebase initialisation
    firebase.initializeApp({
      "apiKey": "AIzaSyBMJzfY5XcNdRBD1ieczobaMPpk30PPTPI",
      "databaseURL": "https://react-pwa-54a52.firebaseio.com",
      "authDomain": "react-pwa-54a52.firebaseapp.com",
      "projectId": "react-pwa-54a52"
    });

    // Initialise firebase services
    this.auth = firebase.auth();
    this.database = firebase.database();

    // Listen for auth state changes
    this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));

  }

  /**
   * Listen to auth changes from Firebase
   * 
   * @param {*} user : returned from Firebase API
   */
  onAuthStateChanged(user) {

    if (user) {

      this.user = user;
      this.setState({ 
        userLoggedIn: true,
        user: {
          displayName: user.displayName,
        }
       });

    }

  }

  /**
   * TODO: This is the normal login button. To be integrated with Firebase Email/Password authentication
   */
  handleLoginClick () {

    this.setState({ userLoggedIn: true });
    
  };

  /**
   * Firebase google login authentication
   * 
   */
  handleLoginWithGoogleClick () {
    
    const provider = new firebase.auth.GoogleAuthProvider();
    this.auth.signInWithPopup(provider);
  }

  render() {

    const { userLoggedIn } = this.state;
    
    if (!userLoggedIn) {
      return (
        <div className="application-container">

          <div className="login-content">

            <div className="login-box">
              {/* <form>
                <label htmlFor="user">Email:</label>
                <input type="text" name="user" />

                <label>Password:</label>
                <input type="password" name="password" />

                <button onClick={this.handleLoginClick}>Log in</button>
              </form> */}
              <button onClick={this.handleLoginWithGoogleClick}>Log in with google</button>
            </div>
           
          </div>

        </div>
      )
    } else {

      return (
        <BrowserRouter>  
          <div className="application-container">

            <AppNav />

            <div className="content">
              <Switch>
                <Route path="/publish" component={Publish}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/search" component={Search}/>
              </Switch>
            </div>

            <Footer user={this.state.user}/>

          </div>
        </BrowserRouter>
      );

    }
  }  
}

/**
 * Hot Module Replacement, accepting hot module replacement for the following modules.
 * 
 * Depends on "new webpack.HotModuleReplacementPlugin()" to work.
 * 
 */
// if (module.hot) {
//
//   console.log('Hot Module Rreplacement is active!');
//
//   module.hot.accept('./Publish', function () {
//     console.log('Accepting Publish hot module replacement!');
//   });
//
// } else {
//
//   console.log('Hot Module Replacement is not active (module.hot)!');  
//
// }

export default App;
