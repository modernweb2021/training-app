import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './service/user.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let tokenAvailable = this.userService.getToken();

    if(tokenAvailable) {
      let modifiedRequest = request.clone({
        setHeaders: {
          'Authorization': tokenAvailable
        }
      });
      return next.handle(modifiedRequest);
    }
    return next.handle(request);
  }
}
