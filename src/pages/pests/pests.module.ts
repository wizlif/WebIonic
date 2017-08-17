import {PestsPage} from "./pests";
import {IonicPageModule} from "ionic-angular";
import {PaginationModule} from "ngx-bootstrap";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    PestsPage
  ],
  imports: [

    PaginationModule.forRoot(),
    IonicPageModule.forChild(PestsPage)
  ],
  entryComponents: [
    PestsPage
  ]
})
export class PestsModule {}
