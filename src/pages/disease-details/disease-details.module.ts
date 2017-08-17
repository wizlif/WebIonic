import {DiseaseDetailsPage} from "./disease-details";
import {IonicPageModule} from "ionic-angular";
import {PipesModule} from "../../pipes/pipes.module";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    DiseaseDetailsPage
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(DiseaseDetailsPage)
  ],
  entryComponents: [
    DiseaseDetailsPage
  ]
})
export class DiseaseDetailsModule {}
