import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any;

  constructor(private http: HttpClient) {
    // this.http.get<any>('https://heroku-smart.herokuapp.com/home').subscribe((resp) => {
    //   console.log(resp);
    //   this.title = resp.toString();
    // });
  }

}

