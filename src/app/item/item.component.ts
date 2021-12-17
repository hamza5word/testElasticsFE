import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  items:any;

  constructor() { }

  ngOnInit(): void {
    this.onGetItems();
  }

  onGetItems() {
    this.items = [
      {id:1, title:'ITEM A', price:150.0, quantity:15},
      {id:2, title:'ITEM B', price:180.0, quantity:1},
      {id:3, title:'ITEM C', price:190.0, quantity:19},
    ];
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
      console.log(data);
    }
  }
}
