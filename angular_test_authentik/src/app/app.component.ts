import {Component, OnInit} from '@angular/core';
import {OidcSecurityService} from "angular-auth-oidc-client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ProjectNavBar';
  myImage: string = "../assets/images/1188620.png";
  constructor(public oidcSecurityService: OidcSecurityService) {}
  ngOnInit() {
    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken }) => {
      console.log('app authenticated', isAuthenticated);
      console.log(`Current access token is '${accessToken}'`);
    });
  }
}
