import {CashPipe} from "./cash/cash";
import {IonicModule} from "ionic-angular";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [CashPipe],
  imports: [IonicModule],
  exports: [CashPipe]
})
export class PipesModule { }
