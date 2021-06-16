import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails,
  //CognitoIdentityServiceProvider
  AmazonCognitoIdentity
 } from 'amazon-cognito-identity-js';
import * as AWS from 'aws-sdk';

@Injectable({
  providedIn: 'root'
})
export class CognitoService {
  private userPool: CognitoUserPool;
  private poolData: any;
  public cognitoCreds: AWS.CognitoIdentityCredentials;

  constructor() {
    AWS.config.region = environment.region;
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: environment.identityPoolId
  });

  this.poolData = {
    UserPoolId: environment.userPoolId,
    ClientId: environment.clientId
  };
  this.userPool = new CognitoUserPool(this.poolData);
  }

}
