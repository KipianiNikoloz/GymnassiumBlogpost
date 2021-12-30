import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AccountService} from "../../login/account.service";
import {ToastrService} from "ngx-toastr";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private accountService: AccountService, private toastr: ToastrService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.accountService.currentAdmin$.pipe(
      map(admin => {
        if(admin) return true;
        this.toastr.error('საჭიროა ავტორიზაცია!');
        this.router.navigate(['./']);
        return false;
      })
    )
  }

}
