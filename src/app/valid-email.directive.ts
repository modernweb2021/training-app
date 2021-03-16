import { Directive } from '@angular/core';
import { Validator, FormControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appValidEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidEmailDirective,
      multi: true
    }
  ]
})
export class ValidEmailDirective implements Validator{

  constructor() { }
  validate(c: FormControl) {
    let valid = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(c.value);
    if(valid) {
      return null;
    } else {
      return {
        emailValid: false
      };
    }
  }
}
