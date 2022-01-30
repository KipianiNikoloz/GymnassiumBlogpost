import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../login/account.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

}
