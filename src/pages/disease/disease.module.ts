import {DiseasePage} from "./disease";
import {IonicPageModule} from "ionic-angular";
import {PipesModule} from "../../pipes/pipes.module";
import {NgModule} from "@angular/core";
import {PaginationModule} from "ngx-bootstrap";

@NgModule({
  declarations: [
    DiseasePage
  ],
  imports: [
    PaginationModule.forRoot(),
    PipesModule,
    IonicPageModule.forChild(DiseasePage)
  ],
  entryComponents: [
   DiseasePage
  ]
})
export class DiseaseModule {}
