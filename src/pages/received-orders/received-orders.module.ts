import {ReceivedOrdersPage} from "./received-orders";
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {PaginationModule} from "ngx-bootstrap";

@NgModule({
  declarations: [
    ReceivedOrdersPage
  ],
  imports: [

    PaginationModule.forRoot(),
    IonicPageModule.forChild(ReceivedOrdersPage)
  ],
  entryComponents: [
    ReceivedOrdersPage
  ]
})
export class ReceivedOrdersModule {}
