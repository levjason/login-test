import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackagesComponent } from './packages/packages.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: 'packages', component: PackagesComponent },
  { path: 'logout', component: LogoutComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
