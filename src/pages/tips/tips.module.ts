import {TipsPage} from "./tips";
import {IonicPageModule} from "ionic-angular";
import {PaginationModule} from "ngx-bootstrap";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    TipsPage
  ],
  imports: [
    PaginationModule.forRoot(),
    IonicPageModule.forChild(TipsPage)
  ],
  entryComponents: [
    TipsPage
  ]
})
export class TipsModule {}
