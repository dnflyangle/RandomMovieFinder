import * as MovieApi from '../MoviesApi';

const CALL_MOVIE_IN_PROGRESS = 'CALL_MOVIE_IN_PROGRESS';
const CALL_MOVIE_SUCCESS = 'CALL_MOVIE_SUCCESS';
const CALL_MOVIE_FAILED = 'CALL_MOVIE_FAILED';

const initialState = {
  movies: null,
  isLoading: true,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CALL_MOVIE_IN_PROGRESS:
      return {
        ...state,
        isLoading: true
      };
    case CALL_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        movies: action.movies
      };
    case CALL_MOVIE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export const callMovieApi = keyword => (dispatch) => {
  dispatch({ type: CALL_MOVIE_IN_PROGRESS });
  return MovieApi.search(keyword)
    .then(movies => dispatch({ type: CALL_MOVIE_SUCCESS, movies }))
    .catch(error => dispatch({ type: CALL_MOVIE_FAILED, error }));
};

