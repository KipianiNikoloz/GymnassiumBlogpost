import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from "@angular/router";
import { ToastrModule } from "ngx-toastr";
import {NgxSpinnerModule} from "ngx-spinner";
import { FooterComponent } from './footer/footer.component';
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
    NgxSpinnerModule,
    BsDropdownModule.forRoot()
  ],
  exports: [
    NavbarComponent,
    NgxSpinnerModule,
    FooterComponent,
    LogoutComponent
  ]
})
export class CoreModule { }
