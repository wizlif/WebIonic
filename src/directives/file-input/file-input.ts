import { Directive } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

/**
 * Generated class for the FileInputDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: 'input[type=file]', // Attribute selector
  host : {
    "(change)" : "onChange($event.target.files)",
    "(blur)": "onTouched()"
  },
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: FileInputDirective, multi: true }
  ]
})
export class FileInputDirective implements ControlValueAccessor {
  value: any;
  onChange = (_) => {};
  onTouched = () => {};

  writeValue(value) {}
  registerOnChange(fn: any) { this.onChange = fn; }
  registerOnTouched(fn: any) { this.onTouched = fn; }
}
