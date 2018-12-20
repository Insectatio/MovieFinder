import { Component, OnInit } from '@angular/core';
import { LatestMovie} from 'src/app/models/latestMovie';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-latestMovie',
  templateUrl: './latestMovie.component.html',
  styleUrls: ['./latestMovie.component.css']
})
export class LatestMovieComponent implements OnInit {

  private latestmov: LatestMovie;

  constructor(private route: ActivatedRoute, private appservice: AppService) { }

  ngOnInit() {
    this.appservice.getLatestMovie().subscribe(data => {
      this.latestmov = data;
    });
  }

}
