import studioGhibli from '../api/StudioGhibli'

export const fetchFilms = () => async dispatch => {
    const response = await studioGhibli.get('/films')
    dispatch({ type: 'FETCH_FILMS', payload: response.data})
}

