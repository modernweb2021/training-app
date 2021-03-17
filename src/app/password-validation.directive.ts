import { Directive } from '@angular/core';
import { Validator, FormControl, NG_VALIDATORS } from '@angular/forms';

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
    let passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(c.value);
    if(passwordValid) {
      return null;
    } else {
      return {
        passwordInvalid: true
      }
    }
  }
}
