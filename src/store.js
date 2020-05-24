import { createStore, applyMiddleware, combineReducers } from 'redux';

import Thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension'

import { searchRobots, requestRobots } from './reducers/reducers';


const rootreducer = combineReducers({ searchRobots, requestRobots });

const middleware = [Thunk]

const store = createStore(
    rootreducer, 
    composeWithDevTools(applyMiddleware(...middleware))
    
    )


export default store;