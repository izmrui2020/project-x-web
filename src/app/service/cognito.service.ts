import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails,
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

  signUp(username: string, password: string): Promise<any> {
    const dataEmail = { Name: 'email', Value: username };
    const attributeList = [];
    attributeList.push(new CognitoUserAttribute(dataEmail));
    return new Promise((resolve, reject) => {
      this.userPool.signUp(username, password, attributeList, null, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  confirmation(username: string, confirmation_code: string): Promise<any> {
    const userData = { Username: username, Pool: this.userPool };
    const cognitoUser = new CognitoUser(userData);
    return  new Promise((resolve, reject) => {
      cognitoUser.confirmRegistration(confirmation_code, true, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

}
