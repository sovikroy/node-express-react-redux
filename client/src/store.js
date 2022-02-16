import { configureStore } from '@reduxjs/toolkit'
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware'
import rootReducer from './reducers';

const logger = createLogger({
})

const history = createBrowserHistory();
const routerHistory = routerMiddleware(history);

export default configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger, routerHistory], //Custom middleware injection using reduxjs toolkit
})