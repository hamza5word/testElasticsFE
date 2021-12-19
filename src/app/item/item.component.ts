import { Component, OnInit } from '@angular/core';
import {ItemRestService} from "./services/data/item-rest.service";
import {Message, MessageComponent} from "../message/message.component";
import {ITEM_RTE, SERVER_URI} from "../app.constants";
import {UserRestService} from "../user/services/data/user-rest.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  items:any;
  users:any;
  imgPathPrefix = SERVER_URI + ITEM_RTE;
  imgPathSuffix = '/image';

  constructor(private service: ItemRestService, private userService: UserRestService) { }

  ngOnInit(): void {
    this.onGetItems();
    this.onGetUsers();
  }

  onGetUsers() {
    this.userService.getUsers().subscribe({
      next: date => {
        // @ts-ignore
        this.users = date._embedded.users;
      },
      error: err => {
        MessageComponent.setMessage(err.message, Message.ERROR);
      }
    })
  }

  onGetItems() {
    /*this.items = [
      {id:1, title:'ITEM A', price:150.0, quantity:15},
      {id:2, title:'ITEM B', price:180.0, quantity:1},
      {id:3, title:'ITEM C', price:190.0, quantity:19},
    ];*/
    this.service.getItems().subscribe({
      next: data => {
        // @ts-ignore
        this.items = data._embedded.items;
      },
      error: err => {
        MessageComponent.setMessage(err.message, Message.ERROR);
      }
    })
  }

  onToggleView(itemId: number, toggle: boolean) {
      let reserveBtn = document.getElementById('reserveBtn-' + itemId);
      let cancelBtn = document.getElementById('cancelBtn-' + itemId);
      let reserveForm = document.getElementById('reserveForm-' + itemId);
      if(reserveBtn != null && reserveForm != null && cancelBtn != null) {
        if(toggle) {
          reserveForm.classList.remove('visually-hidden');
          reserveBtn.classList.add('visually-hidden');
          cancelBtn.classList.remove('visually-hidden');
        }
        else {
          reserveForm.classList.add('visually-hidden');
          reserveBtn.classList.remove('visually-hidden');
          cancelBtn.classList.add('visually-hidden');
        }
      }
  }

  onReserveItem(formData: any, itemId: any) {
    if(formData.userId != '') {
      let data = {
        userId: formData.userId,
        itemId: itemId
      }
      this.service.reserveItem(data).subscribe({
        next: response => {
          MessageComponent.setMessage("Reservation is created", Message.SUCCESS);
        },
        error: err => {
          MessageComponent.setMessage(err.message, Message.ERROR);
        }
      })
    }
  }
}
