import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { KeycloakService, KeycloakAngularModule} from 'keycloak-angular';
import { initializer } from './utils/app-init';

import { AppComponent } from './app.component';
import { PackagesComponent } from './packages/packages.component';
import { LogoutComponent } from './logout/logout.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PackagesComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule, KeycloakAngularModule, AppRoutingModule
  ],
  providers: [
      {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    } 

],
  bootstrap: [AppComponent]
})
export class AppModule { }
