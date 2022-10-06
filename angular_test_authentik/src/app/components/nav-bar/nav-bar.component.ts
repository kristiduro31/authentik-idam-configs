import { Component, OnInit } from '@angular/core';
import {
  OidcClientNotification,
  OidcSecurityService,
  OpenIdConfiguration,
  UserDataResult
} from 'angular-auth-oidc-client';
import {Service} from "../../Service/service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isAuthenticated = false;
  constructor(public oidcSecurityService: OidcSecurityService) {}

  ngOnInit() {
    this.oidcSecurityService.isAuthenticated$.subscribe(({ isAuthenticated }) => {
      this.isAuthenticated = isAuthenticated;

      console.warn('authenticated: ', isAuthenticated);
    });
  }

  login() {
    this.oidcSecurityService.authorize();
  }
  logout() {
    this.oidcSecurityService.logoff();
  }
}
