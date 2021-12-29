import {Component, OnInit} from '@angular/core';

import * as AOS from 'aos';
import {AccountService} from "./login/account.service";
import {Admin} from "./shared/models/admin";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'GymnasiumBlogpost';

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    AOS.init();
    this.setCurrentUser();
  }

  setCurrentUser() {
    const admin: Admin = JSON.parse((localStorage.getItem('user')!));
    if(admin) {
      this.accountService.setCurrentAdmin(admin);
    }
  }
}
