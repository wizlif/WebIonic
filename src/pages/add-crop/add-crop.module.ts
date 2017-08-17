import {AddCropPage} from "./add-crop";
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {ComponentsModule} from "../../components/components.module";
import {DirectivesModule} from "../../directives/directives.module";

@NgModule({
  declarations: [
   AddCropPage
  ],
  imports: [
    ComponentsModule,
    DirectivesModule,
    IonicPageModule.forChild(AddCropPage)
  ],
  entryComponents: [
    AddCropPage
  ],
  exports:[
    AddCropPage
  ]
})
export class AddCropPageModule {}
