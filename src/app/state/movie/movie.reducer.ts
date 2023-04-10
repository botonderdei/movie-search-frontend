import { createReducer, on } from '@ngrx/store';
import {
  loadMovies,
  loadMoviesSuccess,
  loadMoviesFailure,
} from './movie.actions';
import { PaginatedMovies } from 'src/app/services';

export interface MoviesState {
  paginatedMovies: PaginatedMovies | null;
  isLoading: boolean;
  error: string | null;
  query?: string;
  page?: number;
}

export const initialState: MoviesState = {
  paginatedMovies: null,
  isLoading: false,
  error: null,
};

export const moviesReducer = createReducer(
  initialState,
  on(loadMovies, (state, { query, page }) => ({
    ...state,
    isLoading: true,
    query,
    page: page ?? 1,
  })),
  on(loadMoviesSuccess, (state, { paginatedMovies }) => ({
    ...state,
    paginatedMovies,
    isLoading: false,
    error: null,
  })),
  on(loadMoviesFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
);
