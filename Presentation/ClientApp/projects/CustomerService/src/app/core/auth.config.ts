import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
    issuer: 'https://idsvr4.azurewebsites.net',
    redirectUri: 'http://localhost:4200/',
    // silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
    clientId: 'spa',
    responseType: 'code',
    scope: 'openid profile email offline_access api',
    showDebugInformation: true,
    // useSilentRefresh: true,
    timeoutFactor: 0.01,
    sessionChecksEnabled: true,
};


export const authConfig: AuthConfig = {
    issuer: 'https://demo.identityserver.io',
    clientId: 'spa', // The "Auth Code + PKCE" client
    responseType: 'code',
    redirectUri: window.location.origin + '/index.html',
    silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
    scope: 'openid profile email api', // Ask offline_access to support refresh token refreshes
    useSilentRefresh: true, // Needed for Code Flow to suggest using iframe-based refreshes
    silentRefreshTimeout: 5000, // For faster testing
    timeoutFactor: 0.25, // For faster testing
    sessionChecksEnabled: true,
    showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
    clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040,
    nonceStateSeparator: 'semicolon' // Real semicolon gets mangled by IdentityServer's URI encoding
};
