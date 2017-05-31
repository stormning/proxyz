import {createStore, applyMiddleware} from 'redux'
import createHistory from 'history/createBrowserHistory'
import {routerMiddleware} from 'react-router-redux'
import rootReducer from '../reducers' // Or wherever you keep your reducers

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer.js to your store on the `router` key
// Also apply our middleware for navigating
export const store = createStore(
    rootReducer,
    applyMiddleware(middleware)
);