import { NgModule } from '@angular/core';
import { AuthModule,LogLevel } from 'angular-auth-oidc-client';

@NgModule({
    imports: [AuthModule.forRoot({
      config: {
        authority: 'http://localhost:9000/application/o/checkcheck',
        redirectUrl: 'http://localhost:4200/home',
        postLogoutRedirectUri: 'http://localhost:4200/home',
        clientId: '45ea2c136b9209c15cbeaf6948c22bc4ad66e6b3',
        scope: 'email openid profile',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
       }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
