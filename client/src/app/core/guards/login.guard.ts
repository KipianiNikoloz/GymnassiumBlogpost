import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AccountService} from "../../login/account.service";
import {map} from "rxjs/operators";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private accountService: AccountService, private toastr: ToastrService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.accountService.currentAdmin$.pipe(
      map( admin => {
        if(!admin) return true;
        this.router.navigate(['/']);
        this.toastr.warning("Log out first");
        return false;
      })
    )
  }

}
