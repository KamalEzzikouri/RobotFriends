import { createStore, applyMiddleware } from 'redux';

import Trunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension'

import { searchRobots } from './reducers/reducers';

const middleware = [Trunk]

const store = createStore(
    searchRobots, 
    composeWithDevTools(applyMiddleware(...middleware))
    
    )


export default store;