import {AddStockPage} from "./add-stock";
import {IonicPageModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {ComponentsModule} from "../../components/components.module";
import {DirectivesModule} from "../../directives/directives.module";

@NgModule({
  declarations: [
    AddStockPage
],
imports: [
  ComponentsModule,
  DirectivesModule,
  IonicPageModule.forChild(AddStockPage)
],
  entryComponents: [
  AddStockPage
],
  exports:[AddStockPage]
})
export class AddStockPageModule {}
