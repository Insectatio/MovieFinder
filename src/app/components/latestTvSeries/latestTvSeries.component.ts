import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { LatestTvSeries } from 'src/app/models/latestTvSeries';

@Component({
  selector: 'app-latestTvSeries',
  templateUrl: './latestTvSeries.component.html',
  styleUrls: ['./latestTvSeries.component.css']
})
export class LatestTvSeriesComponent implements OnInit {

  private latesttvser : LatestTvSeries;

  constructor(private route: ActivatedRoute, private appservice: AppService) { }

  ngOnInit() {
    this.appservice.getLatestTvSeries().subscribe(data => {
      console.log(data)
      this.latesttvser = data;
    });
  }

}
