import { Directive } from '@angular/core';
import { Validator, FormControl, NG_VALIDATORS } from '@angular/forms';
import { emailValidation } from './helper/utility';
@Directive({
  selector: '[validEmail]',
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
    return emailValidation(c);
  }
}
