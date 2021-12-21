import { Component, OnInit } from '@angular/core';
import {Contact} from "../shared/models/contact";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts: Contact[] = [
    new Contact("Nikoloz Kipiani", "Developer", "598935455", "nikolozkipiani2005@gmail.com", "#737373"),
    new Contact("Maia Rostiashvili", "Teacher", "555555555", "mail@mail.com", "#78c2ad")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
