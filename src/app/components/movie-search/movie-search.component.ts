import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie, MoviesService, PaginatedMovies } from 'src/app/services';
import { loadMovies } from 'src/app/state/movie/movie.actions';
import {
  selectPaginatedMovies,
  selectIsLoading,
  selectError,
} from 'src/app/state/movie/movie.selector';
import { MoviesState } from 'src/app/state/movie/movie.reducer';
import { SharedService } from 'src/app/services/button.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss'],
})
export class MovieSearchComponent {
  constructor(
    private store: Store<{ movies: MoviesState }>,
    private sharedService: SharedService
  ) {}

  query: string = '';

  search(name: string) {
    this.store.dispatch(loadMovies({ query: name }));
    this.sharedService.buttonPressed(true);
  }
}
