import { createAction, props } from '@ngrx/store';
import { PaginatedMovies } from 'src/app/services';

export const loadMovies = createAction(
  '[Movies] Load Movies',
  props<{ query: string; page?: number }>()
);

export const loadMoviesSuccess = createAction(
  '[Movies] Load Movies Success',
  props<{ paginatedMovies: PaginatedMovies }>()
);

export const loadMoviesFailure = createAction(
  '[Movies] Load Movies Failure',
  props<{ error: string }>()
);
