import { createSelector } from '@ngrx/store';
import { MoviesState } from './movie.reducer';

export const selectMoviesState = (state: { movies: MoviesState }) =>
  state.movies;

export const selectPaginatedMovies = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.paginatedMovies
);

export const selectIsLoading = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.isLoading
);

export const selectError = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.error
);

export const selectQuery = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.query ?? null
);

export const selectPage = createSelector(
  selectMoviesState,
  (state: MoviesState) => state.page ?? null
);
