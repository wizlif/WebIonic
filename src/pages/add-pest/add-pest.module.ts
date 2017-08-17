import {AddPestPage} from "./add-pest";
import {IonicPageModule} from "ionic-angular";
import {DirectivesModule} from "../../directives/directives.module";
import {ComponentsModule} from "../../components/components.module";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    AddPestPage
  ],
  imports: [
    ComponentsModule,
    DirectivesModule,
    IonicPageModule.forChild(AddPestPage)
  ],
  entryComponents: [
    AddPestPage
  ],
  exports:[
    AddPestPage
  ]
})
export class AddPestModule {}
