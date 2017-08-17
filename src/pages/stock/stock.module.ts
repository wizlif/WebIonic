import {StockPage} from "./stock";
import {IonicPageModule} from "ionic-angular";
import {PaginationModule} from "ngx-bootstrap";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    StockPage
  ],
  imports: [
    PaginationModule.forRoot(),
    IonicPageModule.forChild(StockPage)
  ],
  entryComponents: [
    StockPage
  ]
})
export class StockModule {}
