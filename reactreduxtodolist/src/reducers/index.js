import { combineReducers } from 'redux'



const managingItemsToList = (listOfTodos = [
        {task: 'Go To AWS', duedate: 'daily'},
        {task: 'Work on projects', duedate: 'daily'},
        {task: 'Go to Meetup', duedate: 'weekly'}
        
    ] , action) => {
    
    if (action.type === 'ADD_ITEM') {
        return [...listOfTodos, action.payload.item]
    } else if (action.type === 'DELETE_ITEM') {
        return listOfTodos.filter((item) => {
            return item !== action.payload.item
        })
    }
    return listOfTodos
}

export default combineReducers({
    list: managingItemsToList
})