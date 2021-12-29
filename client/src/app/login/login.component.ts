import { Component, OnInit } from '@angular/core';
import {AccountService} from "./account.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginInfo: { username: string, password: string } = {
    username: '',
    password: ''
  }

  constructor(private accountService: AccountService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.accountService.login(this.loginInfo).subscribe( value => {
      if(value) {
        this.router.navigate(['/']);
        this.toastr.success("Logged in!");
      } else {
        this.toastr.error("Failed to log in");
      }
    });
    this.reset()
  }

  reset() {
    this.loginInfo = {
      username: '',
      password: ''
    }
  }

}
