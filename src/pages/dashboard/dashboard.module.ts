import {DashboardPage} from "./dashboard";
import {PipesModule} from "../../pipes/pipes.module";
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    DashboardPage
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(DashboardPage)
  ],
  entryComponents: [
    DashboardPage
  ],
  exports:[
    DashboardPage
  ]
})
export class DashboardModule {}
