import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import {
  loadMovies,
  loadMoviesSuccess,
  loadMoviesFailure,
} from './movie.actions';
import { MoviesService } from 'src/app/services';

@Injectable()
export class MoviesEffects {
  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMovies),
      mergeMap((action) =>
        this.moviesService
          .listMovies(action.query as string, action.page as number)
          .pipe(
            map((paginatedMovies) => loadMoviesSuccess({ paginatedMovies })),
            catchError((error) =>
              of(loadMoviesFailure({ error: error.message }))
            )
          )
      )
    )
  );
}
