import JSONPlaceHolder from '../api/JsonPlaceholder'
import _ from 'lodash';



export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts())
    
    _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()
}

export const fetchPosts = () => {
    return async dispatch => {
        const response = await JSONPlaceHolder.get('/posts')
        dispatch({type: 'FETCH_POSTS', payload: response.data})
    }
}


export const fetchUser = id => async dispatch => { 
    const response = await JSONPlaceHolder.get(`/users/${id}`)
    dispatch({ type: 'FETCH_USER', payload: response.data})
}



//This memoization technique helps prevent overfetching

// export const fetchUser = (id) => {
//     return dispatch => {
//         _fetchUser(id, dispatch)
//     }
// }


// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await JSONPlaceHolder.get(`/users/${id}`)
//     dispatch({
//         type: 'FETCH_USER',
//         payload: response.data
//     })
// })