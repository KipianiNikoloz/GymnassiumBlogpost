import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {BehaviorSubject} from "rxjs";
import {Admin} from "../shared/models/admin";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl: string = environment.apiUrl;

  private currentAdminSource = new BehaviorSubject<Admin | null>(null);
  currentAdmin$ = this.currentAdminSource.asObservable();

  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.post<Admin>(this.baseUrl + 'account/login', model).pipe(
      map((response: Admin) => {
        const admin: Admin = response;

        if(admin) {
          this.setCurrentAdmin(admin);
        }

        return admin;
      })
    );
  }

  logout() {
    localStorage.removeItem("user");
    this.currentAdminSource.next(null);
  }

  setCurrentAdmin(admin: Admin) {
    localStorage.setItem('user', JSON.stringify(admin));
    this.currentAdminSource.next(admin);
  }

}
