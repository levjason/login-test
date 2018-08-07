import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {KeycloakService} from 'keycloak-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';


@Injectable()
export class HeroesInterceptor implements HttpInterceptor {
  constructor(public keycloak: KeycloakService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("intercepted request ...");
    return Observable.fromPromise(this.keycloak.getToken()).mergeMap(token => {
      const mod: HttpRequest<any> = request.clone({
      setHeaders: 
         {Authorization: `Bearer ${token}`,  'Content-Type': 'application/json;charset=UTF-8' }
      
      });
      console.log("token = "+ token); 
      return next.handle(mod);
  });
}
}
