import { Directive } from '@angular/core';
import {FormControl, NG_VALIDATORS, Validator} from "@angular/forms";

/**
 * Generated class for the FileValidatorDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[required-file]', // Attribute selector
  providers: [
    { provide: NG_VALIDATORS, useExisting: FileValidatorDirective, multi: true },
  ]
})
export class FileValidatorDirective implements Validator {

  static validate(c: FormControl): {[key: string]: any} {
    return c.value == null || c.value.length == 0 ? { "required" : true} : null;
  }

  validate(c: FormControl): {[key: string]: any} {
    return FileValidatorDirective.validate(c);
  }

}
