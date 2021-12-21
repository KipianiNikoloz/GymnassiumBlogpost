import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import {ContactRoutingModule} from "./contact-routing.module";
import { ContactItemComponent } from './contact-item/contact-item.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    ContactComponent,
    ContactItemComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule
  ]
})
export class ContactModule { }
