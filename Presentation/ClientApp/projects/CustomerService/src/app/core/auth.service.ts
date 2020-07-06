import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './auth.config';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {

    private isAuthenticatedSubject$ = new BehaviorSubject<boolean>(false);
    public isAuthenticated$ = this.isAuthenticatedSubject$.asObservable();

    private isDoneLoadingSubject$ = new ReplaySubject<boolean>();
    public isDoneLoading$ = this.isDoneLoadingSubject$.asObservable();

    constructor(private oauthService: OAuthService, private router: Router) {
        this.oauthService.events
            .subscribe(_ => {
                this.isAuthenticatedSubject$.next(this.oauthService.hasValidAccessToken());
            });

        this.oauthService.events
            .pipe(filter(e => ['token_received'].includes(e.type)))
            .subscribe(e => this.oauthService.loadUserProfile());

        this.oauthService.events
            .pipe(filter(e => ['session_terminated', 'session_error'].includes(e.type)))
            .subscribe(e => this.router.navigate(['/']));

    }

    public AutomaticLogin(): void {
        this.oauthService.configure(authCodeFlowConfig);
        this.oauthService.loadDiscoveryDocumentAndLogin();
        // this.oauthService.loadDiscoveryDocumentAndTryLogin();
    }

    public Login(): void {
        this.oauthService.initCodeFlow();
    }

    public Logout(): void {
        // this.oauthService.logOut();
        this.oauthService.revokeTokenAndLogout();
    }

    public Refresh(): void {
        this.oauthService.silentRefresh();
    }

    public HasValidToken(): boolean {
        return this.oauthService.hasValidAccessToken();
    }

    // These normally won't be exposed from a service like this, but
    // for debugging it makes sense.
    public get accessToken() { return this.oauthService.getAccessToken(); }
    public get refreshToken() { return this.oauthService.getRefreshToken(); }
    public get identityClaims() { return this.oauthService.getIdentityClaims(); }
    public get idToken() { return this.oauthService.getIdToken(); }
    public get logoutUrl() { return this.oauthService.logoutUrl; }
}
