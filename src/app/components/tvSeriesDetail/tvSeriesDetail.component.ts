import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { TvDetail } from 'src/app/models/tvDetail';

@Component({
  selector: 'app-tvSeriesDetail',
  templateUrl: './tvSeriesDetail.component.html',
  styleUrls: ['./tvSeriesDetail.component.css']
})
export class TvSeriesDetailComponent implements OnInit {

  private tvdetails: TvDetail;
  private id: any;

  constructor(private route: ActivatedRoute, private appservice: AppService) { }

  ngOnInit() {
    this.route.params.subscribe(det => {
      this.id = det.id;
    });
    this.appservice.getTvSeriesDetails(this.id).subscribe(data => {
      this.tvdetails = data;
    });
  }
}