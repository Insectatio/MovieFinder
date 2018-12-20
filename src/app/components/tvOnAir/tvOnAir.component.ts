import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/models/tvOnAir';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-tvOnAir',
  templateUrl: './tvOnAir.component.html',
  styleUrls: ['./tvOnAir.component.css']
})
export class TvOnAirComponent implements OnInit {

  private tvOnAir: Result[];

  constructor(private route: ActivatedRoute, private appservice: AppService) { }

  ngOnInit() {
    this.appservice.getTvOnAir().subscribe(data => {
      this.tvOnAir = data.results;
    });
  }

}
