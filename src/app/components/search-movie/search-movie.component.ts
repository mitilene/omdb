import {Component,  Output, EventEmitter, OnInit} from '@angular/core';
import {MoviesService} from "../../Services/movies.service";
// import {Observable} from "rxjs";
// import {Store} from "@ngrx/store";
// import {search, reset} from "../../Actions/search.actions";

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {
  movies: any = [];
  @Output() newItemEvent = new EventEmitter<string>();

  // search$: Observable<string>;
  // typeData: string | any = "movie";

  constructor(
    private moviesService: MoviesService,
    // private store: Store<{ search: string }>
  ) {
    // this.search$ = store.select('search');
  }


  ngOnInit(): void {
    // this.moviesService.getMovieAll(this.typeData).then(res => {
    //   console.log("res", res);
    // });
  }


  getMovies(value: string) {
    // @ts-ignore
    const valueInput = document.getElementById("ntt-search").value;

    this.moviesService.getMovie(valueInput).then(res => {
      this.movies = res.Search;
      console.log("this.movies", this.movies);
    });

    this.newItemEvent.emit(value);
  }

  cleanMovies() {
    this.movies.length = 0;

    // this.store.dispatch(reset());
  }
}
