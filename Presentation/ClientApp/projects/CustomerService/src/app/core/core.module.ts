import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthConfig, OAuthModule, OAuthModuleConfig, OAuthStorage } from 'angular-oauth2-oidc';
// import { AuthGuardWithForcedLogin } from './auth-guard-with-forced-login.service';
// import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { authCodeFlowConfig } from './auth.config';
import { authModuleConfig } from './auth.module.config';
import { TrackByService } from './trackby.service';
import { Sorter } from './sorter';

// We need a factory since localStorage is not available at AOT build time
export function storageFactory(): OAuthStorage {
    return localStorage;
}

@NgModule({
    imports: [
        HttpClientModule,
        OAuthModule.forRoot(),
    ],
    providers: [
        AuthService,
        // AuthGuard,
        // AuthGuardWithForcedLogin,
        Sorter,
        TrackByService
    ],
})
export class CoreModule {
    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
                { provide: AuthConfig, useValue: authCodeFlowConfig },
                { provide: OAuthModuleConfig, useValue: authModuleConfig },
                { provide: OAuthStorage, useFactory: storageFactory },
                // Sorter,
                // TrackByService
            ]
        };
    }

    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
