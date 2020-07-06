import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomerService';
  isAuthenticated: Observable<boolean>;
  isDoneLoading: Observable<boolean>;

  constructor(private authService: AuthService){
    this.isAuthenticated = this.authService.isAuthenticated$;
    this.isDoneLoading = this.authService.isDoneLoading$;
    this.authService.AutomaticLogin();
  }

  public login(): void{
    this.authService.Login();
  }

  public logout(): void{
    this.authService.Logout();
  }

  get hasValidToken() { return this.authService.HasValidToken(); }
  get accessToken() { return this.authService.accessToken; }
  get refreshToken() { return this.authService.refreshToken; }
  get identityClaims() { return this.authService.identityClaims; }
  get idToken() { return this.authService.idToken; }
  get email() {
    return this.authService.identityClaims
    // tslint:disable-next-line: no-string-literal
    ? this.authService.identityClaims['email']
    : '-';
  }
}
