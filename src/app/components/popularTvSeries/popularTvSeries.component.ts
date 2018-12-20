import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { Result } from 'src/app/models/popularTvSeries';

@Component({
  selector: 'app-popularTvSeries',
  templateUrl: './popularTvSeries.component.html',
  styleUrls: ['./popularTvSeries.component.css']
})
export class PopularTvSeriesComponent implements OnInit {

  private poptvser: Result[];

  constructor(private route: ActivatedRoute, private appservice: AppService) { }

  ngOnInit() {
    this.appservice.getPopularTvSeries().subscribe(data => {
      this.poptvser = data.results;
    });
  }

}
