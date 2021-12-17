import { Component, OnInit } from '@angular/core';
import {CharUtilsService} from "../services/utils/char-utils.service";
import {routes} from "../app-routing.module";
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  static current_nav:any;

  navs:any = [];

  constructor(
    private charUtilsService:CharUtilsService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.onInitNavs();
    this.onRouteEvent();
  }

  onInitNavs() {
    for(let route of routes) {
      let path = route.path;
      if(path != '') {
        this.navs.push({
          name:this.charUtilsService.upperFirstChar(path),
          route:path
        });
      }
      else NavComponent.current_nav = route.redirectTo;
    }
  }

  onRouteEvent() {
    this.router.events.subscribe((e:any) => {
      if(e instanceof NavigationStart) {
        NavComponent.current_nav = e.url.substr(1);
      }
    })
  }

}
