import { createStore, applyMiddleware } from 'redux';

import Thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension'

import { searchRobots } from './reducers/reducers';

const middleware = [Thunk]

const store = createStore(
    searchRobots, 
    composeWithDevTools(applyMiddleware(...middleware))
    
    )


export default store;