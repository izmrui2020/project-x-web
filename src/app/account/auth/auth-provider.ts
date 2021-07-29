import { Observable } from "rxjs";

export interface AuthProvider {
  currentAuthenticatedSession(): Observable<any>;
  isAuthenticated$: Observable<boolean>;
  completeNewPassword(password: string): void;
  confirmSignIn(code: string): void;
  login(username, password): Observable<any>;
  logout(): void;
}
