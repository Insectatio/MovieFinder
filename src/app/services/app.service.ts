import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiConfiguration } from '../models/apiConfiguration';
import { MovieGenres } from '../models/movieGenres';
import { TvGenres } from '../models/tvGenres';
import { GuestSession } from '../models/guestSession';
import { RequestToken } from '../models/requestToken';
import { DiscoverMovie } from '../models/discoverMovie';
import { DiscoverTvSeries } from '../models/discoverTvSeries';
import { MovieInfo } from '../models/movieInfo';
import { LatestMovie } from '../models/latestMovie';
import { PopularMovie } from '../models/popularMovie';
import { UpcomingMovie } from '../models/upcomingMovie';
import { TopRatedMovie } from '../models/topRatedMovie';
import { TopRatedTvSeries } from '../models/topRatedTvSeries';
import { PopularTvSeries } from '../models/popularTvSeries';
import { LatestTvSeries } from '../models/latestTvSeries';
import { AiringTodayTvSeries } from '../models/airingTodayTvSeries';
import { TvOnAir } from '../models/tvOnAir';
import { MovieNowPlaying } from '../models/movieNowPlaying';
import { TvDetail } from '../models/tvDetail';
import { MovieDetail } from '../models/movieDetail';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getApiConfiguration() {
    return this.http.get<ApiConfiguration>('https://api.themoviedb.org/3/configuration?api_key=' + environment.api_key, {
    });
  }

  getMovieGenres() {
    return this.http.get<MovieGenres>('https://api.themoviedb.org/3/genre/movie/list?api_key=' + environment.api_key, {
    });
  }

  getTvGenres() {
    return this.http.get<TvGenres>('https://api.themoviedb.org/3/genre/tv/list?api_key=' + environment.api_key, {
    });
  }

  getGuestSession() {
    return this.http.get<GuestSession>('https://api.themoviedb.org/3/authentication/guest_session/new?api_key=' + environment.api_key, {
    });
  }

  getRequestToken() {
    return this.http.get<RequestToken>('https://api.themoviedb.org/3/authentication/token/new?api_key=' + environment.api_key, {
    });
  }

  getDiscoverMovie() {
    return this.http.get<DiscoverMovie>('https://api.themoviedb.org/3/discover/movie?api_key=' + environment.api_key, {
    });
  }

  getDiscoverTvSeries() {
    return this.http.get<DiscoverTvSeries>('https://api.themoviedb.org/3/discover/tv?api_key=' + environment.api_key, {
    });
  }

  getLatestMovie() {
    return this.http.get<LatestMovie>('https://api.themoviedb.org/3/movie/latest?api_key=' + environment.api_key, {
    });
  }

  getPopularMovie() {
    return this.http.get<PopularMovie>('https://api.themoviedb.org/3/movie/popular?api_key=' + environment.api_key, {
    });
  }

  getUpcomingMovie() {
    return this.http.get<UpcomingMovie>('https://api.themoviedb.org/3/movie/upcoming?api_key=' + environment.api_key, {
    });
  }

  getTopRatedMovie() {
    return this.http.get<TopRatedMovie>('https://api.themoviedb.org/3/movie/top_rated?api_key=' + environment.api_key, {
    });
  }

  getTopRatedTvSeries() {
    return this.http.get<TopRatedTvSeries>('https://api.themoviedb.org/3/tv/top_rated?api_key=' + environment.api_key, {
    });
  }

  getPopularTvSeries() {
    return this.http.get<PopularTvSeries>('https://api.themoviedb.org/3/tv/popular?api_key=' + environment.api_key, {
    });
  }

  getLatestTvSeries() {
    return this.http.get<LatestTvSeries>('https://api.themoviedb.org/3/tv/latest?api_key=' + environment.api_key, {
    });
  }

  getAiringTodayTvSeries() {
    return this.http.get<AiringTodayTvSeries>('https://api.themoviedb.org/3/tv/airing_today?api_key=' + environment.api_key, {
    });
  }

  getTvOnAir() {
    return this.http.get<TvOnAir>('https://api.themoviedb.org/3/tv/on_the_air?api_key=' + environment.api_key, {
    });
  }

  getMovieNowPlaying() {
    return this.http.get<MovieNowPlaying>('https://api.themoviedb.org/3/movie/now_playing?api_key=' + environment.api_key, {
    });
  }

  getTvSeriesDetails(id: any) {
    return this.http.get<TvDetail>('https://api.themoviedb.org/3/tv/' + id +'?api_key=' + environment.api_key, {
    });
  }

  getMovieDetails(id: any) {
    return this.http.get<MovieDetail>('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + environment.api_key, {
    });
  }

  // getMovieInfo(id: DiscoverMovie) {
  //   return this.http.get<MovieInfo>('https://api.themoviedb.org/3/movie/'+ id + '?api_key=' + environment.api_key, {
  //   });
  // }
}



