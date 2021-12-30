import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'stories', loadChildren: () => import('./stories/stories.module').then(m => m.StoriesModule) },
  { path: 'authors', loadChildren: () => import('./authors/authors.module').then(m => m.AuthorsModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'errors', loadChildren: () => import('./errors/errors.module').then(m => m.ErrorsModule) },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
