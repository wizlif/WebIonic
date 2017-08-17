import {WeatherPage} from "./weather";
import {IonicPageModule} from "ionic-angular";
import {PaginationModule} from "ngx-bootstrap";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    WeatherPage
  ],
  imports: [

    PaginationModule.forRoot(),
    IonicPageModule.forChild(WeatherPage)
  ],
  entryComponents: [
    WeatherPage
  ]
})
export class WeatherPageModule {}
