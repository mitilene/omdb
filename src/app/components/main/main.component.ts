import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../Services/movies.service";
// import {Observable} from "rxjs";
// import {Store} from '@ngrx/store';
// import { reset } from '../../Actions/search.actions';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  movies: any = [];
  // search$: Observable<string>

  constructor(
    private moviesService: MoviesService,
    // private store: Store<{ search: string }>
  ) {
    // this.search$ = store.select('search');
  }

  ngOnInit(): void {
  }

  getMovies() {
    // @ts-ignore
    const valueInput = document.getElementById("ntt-search").value;

    this.moviesService.getMovie(valueInput).then(res => {
      this.movies = res.Search;
      console.log("this.movies", this.movies);
    });
  }

  cleanMovies() {
    this.movies.length = 0;

    // this.store.dispatch(reset());
  }

}
