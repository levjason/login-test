import { KeycloakService } from 'keycloak-angular';
 
export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
	await keycloak.init({
    	config: {
      		url: 'http://usrscp29:5050/auth',
      		realm: 'dts',
      		clientId: 'navigator'
    	},
    	initOptions: {
      		onLoad: 'login-required',
      		checkLoginIframe: false
   	},
    	enableBearerInterceptor: true,
    	bearerExcludedUrls: [
      		'/assets',
      		'/clients/public'
    	],
  	});
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
}
