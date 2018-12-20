import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutes } from './app-routing.module';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { GenresComponent } from './components/genres/genres.component';
import { AirTodayComponent } from './components/airToday/airToday.component';
import { LatestMovieComponent } from './components/latestMovie/latestMovie.component';
import { LatestTvSeriesComponent } from './components/latestTvSeries/latestTvSeries.component';
import { PopularMoviesComponent } from './components/popularMovies/popularMovies.component';
import { PopularTvSeriesComponent } from './components/popularTvSeries/popularTvSeries.component';
import { TvOnAirComponent } from './components/tvOnAir/tvOnAir.component';
import { MovieNowPlayingComponent } from './components/movieNowPlaying/movieNowPlaying.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    GenresComponent,
    AirTodayComponent,
    LatestMovieComponent,
    LatestTvSeriesComponent,
    PopularMoviesComponent,
    PopularTvSeriesComponent,
    TvOnAirComponent,
    MovieNowPlayingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutes,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
