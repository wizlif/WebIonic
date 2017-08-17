import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {WeatherProvider} from "../../providers/weather/weather";


@IonicPage({
  name:'weather',
  segment:'weather'
})
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
  providers:[WeatherProvider]
})
export class WeatherPage implements OnInit{
  public weather;
  public weatherData;

  public maxSize = 5;
  public bigTotalItems = 0;
  public bigCurrentPage = 1;
  public itemsPerPage = 11;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public weatherProvider:WeatherProvider) {
  }

  ngOnInit(): void {
    this.weatherProvider.getWeather()
      .subscribe(weather => {
        this.weather=weather;
        this.bigTotalItems = this.weather.length;
        this.pageChanged({page: 1})
          ,
          err => console.log(err)
      });
  }

  public pageChanged({page}): void {
    this.weatherData = this.weather.filter((value, index) => {
      if (index >= this.itemsPerPage * (page - 1) && index < page * this.itemsPerPage) {
        return value;
      }
    });
  }

}
