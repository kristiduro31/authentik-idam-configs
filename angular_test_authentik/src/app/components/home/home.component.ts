import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {NavBarComponent} from "../nav-bar/nav-bar.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
