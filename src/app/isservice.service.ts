import { Injectable } from '@angular/core';
import { Configuration } from './app.constants';
import { KeycloakHttp } from './keycloak/keycloak.http';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class IsserviceService {
  private actionUrl: string;

  constructor( private http: Http, _configuration : Configuration, private keycloakHttp: KeycloakHttp) 
  {
     this.actionUrl = ""+_configuration.ISApiUrl;
  }
  public getPackages():Promise<any>{
     var serviceUrl = this.actionUrl+"/packages";
     return this.keycloakHttp.get(serviceUrl).toPromise();
  }
}
