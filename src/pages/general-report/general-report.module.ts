import {GeneralReportPage} from "./general-report";
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    GeneralReportPage
  ],
  imports: [
    IonicPageModule.forChild(GeneralReportPage)
  ],
  entryComponents: [
    GeneralReportPage
  ]
})
export class GeneralReportModule {}
