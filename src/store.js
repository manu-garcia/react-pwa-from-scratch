import { applyMiddleware, createStore } from 'redux'

import reducers from './reducers';

const loggerMiddleware = store => next => action => {
  // console.log("Change fired", action);
  next(action);
};

const middleware = applyMiddleware(loggerMiddleware);

export default createStore(reducers, middleware);
