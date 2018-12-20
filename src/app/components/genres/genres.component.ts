import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/movieGenres';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  private moviegen: Genre[];
  private tvgen : Genre[];
  private id: Number;

  constructor(private route: ActivatedRoute, private appservice: AppService) { }

  ngOnInit() {
    this.appservice.getMovieGenres().subscribe(data => {
      this.moviegen = data.genres;
    });

    this.appservice.getTvGenres().subscribe(data => {
      this.tvgen = data.genres;
    });
  }

}
