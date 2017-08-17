import {PaymentsReportPage} from "./payments-report";
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    PaymentsReportPage
  ],
  imports: [
    IonicPageModule.forChild(PaymentsReportPage)
  ],
  entryComponents: [
    PaymentsReportPage
  ]
})
export class PaymentsReportModule {}
