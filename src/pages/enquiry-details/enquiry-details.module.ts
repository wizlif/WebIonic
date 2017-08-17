import {EnquiryDetailsPage} from "./enquiry-details";
import {IonicPageModule} from "ionic-angular";
import {PipesModule} from "../../pipes/pipes.module";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    EnquiryDetailsPage
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(EnquiryDetailsPage)
  ],
  entryComponents: [
    EnquiryDetailsPage
  ]
})
export class EnquiryDetailsModule {}
