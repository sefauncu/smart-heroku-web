import {Component} from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  temp: any;
  title: any = '';

  constructor(private appService: AppService) {
    this.appService.getMessage().subscribe((resp) => {
      this.temp = resp;
      this.title = this.temp.name + '-' + this.temp.surname;
    });
  }
}

