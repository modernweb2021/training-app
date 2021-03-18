import { FormControl } from '@angular/forms';

export function emailValidation(c: FormControl) {
  let valid = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(c.value);
  if(valid) {
    return null;
  } else {
    return {
      emailValidationFailed: true
    };
  }
}

export function passwordValidation(c: FormControl) {
  let passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(c.value);
    if(passwordValid) {
      return null;
    } else {
      return {
        passwordInvalid: true
      }
    }
}


