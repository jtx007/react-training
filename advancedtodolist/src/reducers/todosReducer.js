import { FETCH_TODOS, FETCH_TODO, CREATE_TODO, EDIT_TODO, DELETE_TODO } from '../actions/types'


export default (state = [], action) => {
    switch (action.type) {
        case FETCH_TODOS:
            return [ ...action.payload]
        case FETCH_TODO:
            return action.payload
        case CREATE_TODO:
            return action.payload
        default:
            return state
    }
}
