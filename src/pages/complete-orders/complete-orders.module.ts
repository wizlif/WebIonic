import {CompleteOrdersPage} from "./complete-orders";
import {PaginationModule} from "ngx-bootstrap";
import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";

@NgModule({
  declarations: [
    CompleteOrdersPage
  ],
  imports: [
    PaginationModule.forRoot(),
    IonicPageModule.forChild(CompleteOrdersPage)
  ],
  entryComponents: [
    CompleteOrdersPage
  ]
})
export class CompleteOrdersModule {}
