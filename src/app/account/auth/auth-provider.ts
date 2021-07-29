import { Observable } from "rxjs";

export interface AuthProvider {
  currentAuthenticatedSession$: Observable<{}>;
  isAuthenticated$: Observable<boolean>;
  completeNewPassword(password: string): void;
  confirmSignIn(code: string): void;
  login(email, password): Observable<any>;
  logout(): void;
}
