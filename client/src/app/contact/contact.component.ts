import { Component, OnInit } from '@angular/core';
import {Contact} from "../shared/models/contact";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts: Contact[] = [
    new Contact("მაია როსტიაშვილი", "მასწავლებელი", "555555555", "mail@mail.com", "#78c2ad")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
