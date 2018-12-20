import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { Result } from 'src/app/models/airingTodayTvSeries';

@Component({
  selector: 'app-airToday',
  templateUrl: './airToday.component.html',
  styleUrls: ['./airToday.component.css']
})
export class AirTodayComponent implements OnInit {

  private airtoday: Result[];

  constructor(private route: ActivatedRoute, private appservice: AppService) { }

  ngOnInit() {
    this.appservice.getAiringTodayTvSeries().subscribe(data => {
      this.airtoday = data.results;
    });
  }

}
