import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthConfigModule } from './auth/auth-config.module';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import {UnauthorizedComponent} from "./components/unauthorized/unauthorized.component";
import {EventTypes, PublicEventsService} from "angular-auth-oidc-client";
import {filter} from "rxjs";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    HomeComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthConfigModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'forbidden', component: UnauthorizedComponent },
      { path: 'unauthorized', component: UnauthorizedComponent },
    ]),
    AuthConfigModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {constructor(private readonly eventService: PublicEventsService) {
  this.eventService
    .registerForEvents()
    .pipe(filter((notification: { type: EventTypes; }) => notification.type === EventTypes.ConfigLoaded))
    .subscribe((config) => {
      console.log('ConfigLoaded', config);
    });
} }
