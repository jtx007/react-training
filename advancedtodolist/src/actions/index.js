import { FETCH_TODOS, FETCH_TODO, CREATE_TODO, EDIT_TODO, DELETE_TODO } from './types'
import todosJsonServer from '../api/todosJsonServer'
import history from '../hisory'

export const fetchTodos = () => async dispatch =>  {

    const response = await todosJsonServer.get('/todos')
    dispatch({ type: FETCH_TODOS, payload: response.data })
}

export const createTodo = (title, duedate, description) => async dispatch => {
    
    const response =  await todosJsonServer.post('/todos', {title: title, duedate: duedate, description: description})
    dispatch({type: CREATE_TODO, payload: response.data})
    history.push('/')
}

export const fetchTodo = (id) => async dispatch => {
    const response = await todosJsonServer.get(`/todos/${id}`)
    dispatch({ type: FETCH_TODO, payload: response.data})
}

export const deleteTodo = (id) => async dispatch => {
    await todosJsonServer.delete(`/todos/${id}`)
    dispatch({ type: DELETE_TODO, payload: id})
    history.push('/')
}

export const editTodo = (title, duedate, description, id) => async dispatch => {

    const response =  await todosJsonServer.patch(`/todos/${id}`, {title: title, duedate: duedate, description: description})
    dispatch({ type: EDIT_TODO, payload: response.data})
    history.push('/')
}