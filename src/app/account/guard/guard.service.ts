import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor() { }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token != null;
  }

}
