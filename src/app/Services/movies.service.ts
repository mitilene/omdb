import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiKey: string;
  url: string;

  constructor(private http: HttpClient) {
    this.apiKey = "3b2c0556";
    this.url = "http://www.omdbapi.com/?apikey=";
  }

  getMovie(name: string): Promise<any> {
    return this.http.get(this.url + this.apiKey + "&s=" + name).toPromise();
  }
}
