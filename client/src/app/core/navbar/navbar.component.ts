import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AccountService} from "../../login/account.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.accountService.logout();
    this.toastr.success("Logged out");
  }
}
