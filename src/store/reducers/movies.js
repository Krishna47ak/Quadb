import { BOOK_MOVIE, FETCH_ERROR, FETCH_MOVIES } from "../types"

const initialState = {
    loading: true,
    movies: [],
    bookedMovies: []
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case FETCH_MOVIES:
            return {
                ...state,
                loading: false,
                movies: payload
            }
        case BOOK_MOVIE:
            if (state.bookedMovies.find((movie) => movie.id == action.payload.id)) {
                return state
            }
            return {
                ...state,
                loading: false,
                bookedMovies: [...state.bookedMovies, action.payload]
            }

        case FETCH_ERROR:
            return {
                ...state,
                loading: false,
                movies: [],
                bookedMovies: []
            }
        default:
            return state
    }
}