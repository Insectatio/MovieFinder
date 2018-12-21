import { Component, OnInit } from '@angular/core';
import { MovieDetail } from 'src/app/models/movieDetail';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-movieDetail',
  templateUrl: './movieDetail.component.html',
  styleUrls: ['./movieDetail.component.css']
})
export class MovieDetailComponent implements OnInit {

  private movdetails: MovieDetail;
  private id: any;

  constructor(private route: ActivatedRoute, private appservice: AppService) { }

  ngOnInit() {
    this.route.params.subscribe(det => {
      this.id = det.id;
    });
    this.appservice.getMovieDetails(this.id).subscribe(data => {
      console.log(data)
      this.movdetails = data;
    });
  }

}
