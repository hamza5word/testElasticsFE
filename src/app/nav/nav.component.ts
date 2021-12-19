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

  navs:any = [];

  constructor(
    private charUtilsService:CharUtilsService,
  ) { }

  ngOnInit(): void {
    this.onInitNavs();
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
    }
  }


}
