import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch  
} from 'react-router-dom';

import AppNav from './appnav';
import Footer from './footer/footer';

import Loadable from 'react-loadable';

import './app.scss';

function Loading() {
  return <div>Loading...</div>;
}

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
  render() {
    return (
      <HashRouter>  
        <div className="application-container">

          <AppNav />

          <div className="content">
            <Switch>
              <Route path="/publish" component={Publish}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/search" component={Search}/>
            </Switch>
          </div>

          <Footer />

        </div>
      </HashRouter>
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
