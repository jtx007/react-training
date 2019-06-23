import JSONPlaceHolder from '../api/JsonPlaceholder'

export const fetchPosts = () => {
    return async dispatch  => {
        const response = await JSONPlaceHolder.get('/posts')
        dispatch({type: 'FETCH_POSTS', payload: response.data})
    }
}

export const fetchUser = (id) => { 
    return async dispatch => {
        const response = await JSONPlaceHolder.get(`/users/${id}`)
        dispatch({type: 'FETCH_USER', payload: response.data})
    }
}