
import {EnquiriesPage} from "./enquiries";
import {IonicPageModule} from "ionic-angular";
import {PipesModule} from "../../pipes/pipes.module";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    EnquiriesPage
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(EnquiriesPage)
  ],
  entryComponents: [
    EnquiriesPage
  ]
})
export class EnquiriesModule {}
