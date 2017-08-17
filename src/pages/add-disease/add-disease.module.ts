import {AddDiseasePage} from "./add-disease";
import {IonicPageModule} from "ionic-angular";
import {DirectivesModule} from "../../directives/directives.module";
import {ComponentsModule} from "../../components/components.module";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    AddDiseasePage
  ],
  imports: [
    ComponentsModule,
    DirectivesModule,
    IonicPageModule.forChild(AddDiseasePage)
  ],
  entryComponents: [
    AddDiseasePage
  ],
  exports:[
    AddDiseasePage
  ]
})
export class AddDiseaseModule {}
