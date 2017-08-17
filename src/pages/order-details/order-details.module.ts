import {OrderDetailsPage} from "./order-details";
import {NgModule} from "@angular/core";
import {PaginationModule} from "ngx-bootstrap";
import {IonicPageModule} from "ionic-angular";

@NgModule({
  declarations: [
    OrderDetailsPage
  ],
  imports: [

    PaginationModule,
    IonicPageModule.forChild(OrderDetailsPage)
  ],
  entryComponents: [
    OrderDetailsPage
  ]
})
export class OrderDetailsModule {}
