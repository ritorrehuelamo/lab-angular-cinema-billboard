import {  CinemaService} from './../services/cinema.service';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css'],

})
export class MyMovieComponent implements OnInit {
  movieId: Number;
  movies = this.cinema.getMovies();
  constructor(private route: ActivatedRoute, private cinema: CinemaService) {}
  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        console.log(params);
				console.log(this.movies);
        this.movieId = Number(params['id']);
      });
  }

}
