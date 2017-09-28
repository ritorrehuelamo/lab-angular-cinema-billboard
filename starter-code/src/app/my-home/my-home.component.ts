import { Routes } from '@angular/router';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  CinemaService
} from '../services/cinema.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css'],
  providers: [CinemaService]
})
export class MyHomeComponent implements OnInit {

  moviesArray = this.cinema.getMovies();

  constructor(private cinema: CinemaService, private router: Router) {}

  ngOnInit() {
		this.moviesArray
	}

}
