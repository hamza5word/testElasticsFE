import { Component, OnInit } from '@angular/core';
import {NavigationStart, Router} from "@angular/router";

export class Message {

  static SUCCESS = 'success';
  static INFO = 'info';
  static ERROR = 'danger';
  static WARNING = 'warning';

  constructor(public text:any, public type:any) {
  }

}

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  static sharedMessage = new Message('', Message.SUCCESS);
  message:Message = MessageComponent.sharedMessage;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.onRouteEvent();
  }

  onGetStyle(type:any) {
    return 'alert-' + type;
  }

  onRouteEvent() {
    this.router.events.subscribe((e:any) => {
      if(e instanceof NavigationStart) {
        MessageComponent.setMessage('', Message.INFO);
      }
    });
  }

  static setMessage(text:any, type:any) {
    this.sharedMessage.text = text;
    this.sharedMessage.type = type;
  }

}
