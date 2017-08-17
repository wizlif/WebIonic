import {FileInputDirective} from "./file-input/file-input";
import {FileValidatorDirective} from "./file-validator/file-validator";
import {IonicModule} from "ionic-angular";
import {NgModule} from "@angular/core";
import {FileSelectDirective} from "ng2-file-upload";

@NgModule({
  declarations: [FileInputDirective,FileValidatorDirective,FileSelectDirective],
  imports: [IonicModule],
  exports: [FileInputDirective,FileValidatorDirective,FileSelectDirective]
})
export class DirectivesModule { }
