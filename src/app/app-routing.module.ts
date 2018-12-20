import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GenresComponent } from './components/genres/genres.component';
import { AirTodayComponent } from './components/airToday/airToday.component';
import { LatestMovieComponent } from './components/latestMovie/latestMovie.component';
import { LatestTvSeriesComponent } from './components/latestTvSeries/latestTvSeries.component';
import { PopularMoviesComponent } from './components/popularMovies/popularMovies.component';
import { PopularTvSeriesComponent } from './components/popularTvSeries/popularTvSeries.component';
import { TvOnAirComponent } from './components/tvOnAir/tvOnAir.component';
import { MovieNowPlayingComponent } from './components/movieNowPlaying/movieNowPlaying.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'genres', component: GenresComponent },
  { path: 'latestmovie', component: LatestMovieComponent },
  { path: 'latesttvserie', component: LatestTvSeriesComponent },
  { path: 'popularmovie', component: PopularMoviesComponent },
  { path: 'populartvseries', component: PopularTvSeriesComponent },
  { path: 'movienowplaying', component: MovieNowPlayingComponent },
  { path: 'tvonair', component: TvOnAirComponent },
  { path: 'airtoday', component: AirTodayComponent },
  { path: '**', component: HomeComponent }
];



export const AppRoutes = RouterModule.forRoot(routes);


