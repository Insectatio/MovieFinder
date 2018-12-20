import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/models/movieNowPlaying';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-movieNowPlaying',
  templateUrl: './movieNowPlaying.component.html',
  styleUrls: ['./movieNowPlaying.component.css']
})
export class MovieNowPlayingComponent implements OnInit {

  private movieNowPlaying: Result[];

  constructor(private route: ActivatedRoute, private appservice: AppService) { }

  ngOnInit() {
    this.appservice.getMovieNowPlaying().subscribe(data => {
      this.movieNowPlaying = data.results;
    });
  }

}
