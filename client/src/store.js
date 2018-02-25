import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './reducers';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware'

const logger = createLogger({
})

const history = createHistory();
const routerHistory = routerMiddleware(history);
let middlewareArray = [promiseMiddleware(), thunk, routerHistory];
if (process.env.NODE_ENV !== 'production') {
    middlewareArray = [...middlewareArray, logger];
}

const middleware = applyMiddleware(...middlewareArray);

const store = createStore(rootReducer,
    compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f)
);

export default store;