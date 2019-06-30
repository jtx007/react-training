import { FETCH_TODOS, FETCH_TODO, CREATE_TODO, EDIT_TODO, DELETE_TODO } from './types'
import todosJsonServer from '../api/todosJsonServer'

export const fetchTodos = () => async dispatch =>  {

    const response = await todosJsonServer.get('/')
    dispatch({ type: FETCH_TODOS, payload: response.data })
}