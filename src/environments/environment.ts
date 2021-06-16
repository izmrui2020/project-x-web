// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  region: 'ap-northeast-1',
  identityPoolId: 'ap-northeast-1:XXXXXXXX-YYYY-XXXX-YYYY-XXXXXXXXXXXX',
  userPoolId: 'ap-northeast-1_XXXXXXXXX',
  clientId: 'YYYYYYYYYYYYYYYYYYYYYYYYYY',

  bucketName: 'angular-cognito-s3-file-uploader'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
