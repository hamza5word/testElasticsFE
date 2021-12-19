import { Component, OnInit } from '@angular/core';
import {UserRestService} from "./services/data/user-rest.service";
import {Message, MessageComponent} from "../message/message.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:any;

  constructor(private service : UserRestService) { }

  ngOnInit(): void {
    this.onGetUsers();
  }

  onGetUsers() {
    /*this.users = [
      {name:'Hamza', reservations:[1, 2, 3]},
      {name:'Karim', reservations:[3]},
      {name:'Ahmed', reservations:[4, 3]},
    ];*/
    this.service.getUsers().subscribe({
      next: data => {
        // @ts-ignore
        this.users = data._embedded.users;
        this.users.forEach((u:any) => this.onGetUserReservations(u));
      },
      error: err => {
        MessageComponent.setMessage(err.message, Message.ERROR);
      }
    })
  }

  onGetUserReservations(user:any) {
    this.service.getUserReservations(user).subscribe({
      next: data => {
        // @ts-ignore
        user.reservations = data._embedded.reservations;
      },
      error: err => {
        MessageComponent.setMessage(err.message, Message.ERROR);
      }
    });
  }

}
