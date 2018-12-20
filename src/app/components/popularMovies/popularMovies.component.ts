import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/models/popularMovie';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-popularMovies',
  templateUrl: './popularMovies.component.html',
  styleUrls: ['./popularMovies.component.css']
})
export class PopularMoviesComponent implements OnInit {

  private popmovie: Result[];

  constructor(private route: ActivatedRoute, private appservice: AppService) { }

  ngOnInit() {
    this.appservice.getPopularMovie().subscribe(data => {
      this.popmovie = data.results;
    });
  }

}
