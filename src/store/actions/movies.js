import quadBApi from '../../api/quadBApi'
import { BOOK_MOVIE, FETCH_ERROR, FETCH_MOVIES } from '../types'

export const fetchMovies = () => async dispatch => {
    try {
        const response = await quadBApi.get('/')
        dispatch({ type: FETCH_MOVIES, payload: response?.data })
    } catch (err) {
        dispatch({ type: FETCH_ERROR })
        const errors = err?.response?.data?.error
        console.error(errors);
    }
}

export const bookMovie = (movie) => async dispatch => {
    try {
        dispatch({ type: BOOK_MOVIE, payload: movie })
        alert(`You have been booked for "${movie?.name}"`)
    } catch (err) {
        dispatch({ type: FETCH_ERROR })
        const errors = err?.response?.data?.error
        console.error(errors);
    }
}
