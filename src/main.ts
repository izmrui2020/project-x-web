import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// import Amplify, { Auth } from 'aws-amplify';
// import amplify from './aws-exports';
// Amplify.configure(amplify);

// const oauth = {
//   domain : 'oogiri-auth.auth.ap-northeast-1.amazoncognito.com',
//   scope : ['phone', 'email', 'profile', 'openid','aws.cognito.signin.user.admin'],
//   redirectSignIn : 'http://localhost:4200/home',
//   redirectSignOut : 'http://localhost:4200/home',
//   responseType: 'code',
//   options: {
//       AdvancedSecurityDataCollectionFlag : false
//   }
// }

// Auth.configure({
//   oauth:oauth
// });

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
