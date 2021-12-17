import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:any;

  constructor() { }

  ngOnInit(): void {
    this.onGetUsers();
  }

  onGetUsers() {
    this.users = [
      {name:'Hamza', reservations:[1, 2, 3]},
      {name:'Karim', reservations:[3]},
      {name:'Ahmed', reservations:[4, 3]},
    ];
  }

}
