import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch  
} from 'react-router-dom';

import Loadable from 'react-loadable';

import './App.scss';

function Loading() {
  return <div>Loading...</div>;
}

const Activity = Loadable({
  loader: () => import(/* webpackChunkName: "activity" */'./Activity'),
  loading: Loading,
});

class AppNav extends Component {
  render() {
    return (
      <div>
        <ul className="App-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/activity">Activity</Link></li>
        </ul>
      </div>
    );
  }
}
class App extends Component {
  render() {
    return (
      <BrowserRouter>  
        <div className="app-container">
          <header className="app-header">
            <h1 className="app-title">Welcome to React</h1>
          </header>
          <AppNav />

          <Switch>
            <Route path="/activity" component={Activity}/>
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
