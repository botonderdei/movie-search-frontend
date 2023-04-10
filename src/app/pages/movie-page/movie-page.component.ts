import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Observable, merge, tap } from 'rxjs';
import { PaginatedMovies } from 'src/app/services';
import { SharedService } from 'src/app/services/button.service';
import { loadMovies } from 'src/app/state/movie/movie.actions';
import { MoviesState } from 'src/app/state/movie/movie.reducer';
import {
  selectError,
  selectIsLoading,
  selectPage,
  selectPaginatedMovies,
  selectQuery,
} from 'src/app/state/movie/movie.selector';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss'],
})
export class MoviePageComponent implements OnInit {
  constructor(
    private store: Store<{ movies: MoviesState }>,
    private sharedService: SharedService
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('scroll') scroll: ElementRef;

  loading: boolean = false;
  movies$: Observable<PaginatedMovies | null>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  query$: Observable<string | null>;
  page$: Observable<number | null>;
  currentPage: number | null = null;
  currentQuery: string | null = null;

  ngOnInit(): void {
    this.movies$ = this.store.select(selectPaginatedMovies);
    this.loading$ = this.store.select(selectIsLoading);
    this.error$ = this.store.select(selectError);
    this.query$ = this.store.select(selectQuery);
    this.page$ = this.store.select(selectPage);

    this.page$.subscribe((page) => {
      this.currentPage = page;
      console.log('Current Page:', this.currentPage);
    });

    this.query$.subscribe((query) => {
      this.currentQuery = query;
      console.log(this.currentQuery);
    });

    this.sharedService.buttonPressed$.subscribe((pressed) => {
      this.scrollToElement(this.scroll.nativeElement);
    });

    this.loading$.subscribe((load) => {
      this.loading = load;
      console.log(this.loading);
    });
  }

  onPageChange(event: PageEvent) {
    if (this.currentQuery !== null) {
      this.store.dispatch(
        loadMovies({ query: this.currentQuery, page: event.pageIndex + 1 })
      );
    }
    this.scrollToElement(this.scroll.nativeElement);
  }

  scrollToElement(element: any): void {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
