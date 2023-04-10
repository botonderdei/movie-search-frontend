import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';

import { HttpClientModule } from '@angular/common/http';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  MoviesState,
  initialState,
  moviesReducer,
} from './state/movie/movie.reducer';
import { MoviesEffects } from './state/movie/movie.effects';
import { HeaderComponent } from './components/header/header.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    MovieSearchComponent,
    HeaderComponent,
    MoviePageComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot<{ movies: MoviesState }>({ movies: moviesReducer }),
    EffectsModule.forRoot([MoviesEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
