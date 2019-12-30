import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  getMessage() {
    return this.http.get('https://heroku-smart.herokuapp.com/home');
  }
}
