import {SalesReportPage} from "./sales-report";
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    SalesReportPage
  ],
  imports: [
    IonicPageModule.forChild(SalesReportPage)
  ],
  entryComponents: [
    SalesReportPage
  ]
})
export class SalesReportModule {}
