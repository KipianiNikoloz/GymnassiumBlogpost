import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AccountService} from "../../login/account.service";
import {Admin} from "../../shared/models/admin";
import {take} from "rxjs/operators";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private accountService: AccountService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentAdmin: Admin;

    this.accountService.currentAdmin$.pipe(take(1)).subscribe(admin => {
      currentAdmin = admin as Admin;

      if(currentAdmin) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${currentAdmin.token}`
          }
        })
      }
    })

    return next.handle(request);
  }
}
