import { Component } from '@angular/core';
import {RainService} from './rain.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rain = false;

  constructor(private rainService: RainService) {

    window.setInterval(() => {
      this.rainService.getWeather().subscribe((weather) => {
        this.rain = weather;
      });
    }, 500);
  }
}


