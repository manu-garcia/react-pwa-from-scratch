import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch  
} from 'react-router-dom';

import AppNav from './appnav';

import Loadable from 'react-loadable';

import './app.scss';

function Loading() {
  return <div>Loading...</div>;
}

const Activity = Loadable({
  loader: () => import(/* webpackChunkName: "activity" */'./activity/activity'),
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
  render() {
    return (
      <BrowserRouter>  
        <div className="app-container">
          <AppNav />

          <Switch>
            <Route path="/activity" component={Activity}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/search" component={Search}/>
          </Switch>

        </div>
      </BrowserRouter>  
    );
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
//   module.hot.accept('./Activity', function () {
//     console.log('Accepting Activity hot module replacement!');
//   });
//
// } else {
//
//   console.log('Hot Module Replacement is not active (module.hot)!');  
//
// }

export default App;
