
import { CHANGE_SEARCH_FIELD } from '../Actions/constants'

const intialState  = {
    searchField: ''
}

export const searchRobots = (state=intialState, action={})  =>{

    switch (action.type) {
        
        case CHANGE_SEARCH_FIELD:
            // eslint-disable-next-line
            // return {... state, searchField:action.payload};
            return Object.assign({}, state, {searchField:action.payload})
        default:
            return state;
    }
}