import { Directive } from '@angular/core';
import { Validator, FormControl, NG_VALIDATORS } from '@angular/forms';
import {passwordValidation} from './helper/utility';
@Directive({
  selector: '[passwordValidation]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordValidationDirective,
    multi: true
  }]
})
export class PasswordValidationDirective implements Validator{

  constructor() { }

  validate(c: FormControl) {
    return passwordValidation(c);
  }
}
