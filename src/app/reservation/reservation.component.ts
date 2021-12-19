import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Message, MessageComponent} from "../message/message.component";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservations:any;
  selectedReservation:any;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.onGetReservations();
    this.onInitParamReservation();
  }

  onInitParamReservation() {
    let id = this.router.snapshot.paramMap.get('id');
    if(id != null) {
      let found = false;
      this.reservations.forEach((r:any) => {
        if(r.id == id) {
          found = true;
          this.selectedReservation = r;
        }
      });
      if(!found) {
        MessageComponent.setMessage('Reservation not found', Message.ERROR);
      }
    }
  }

  onGetReservations() {
    this.reservations = [
      {id:1, date:'12/12/2010 12:30:00', user:{name:'Hamza'}, item:{title:'s21 ultra', price:13490.0, quantity:2}},
      {id:2, date:'12/12/2012 12:30:00', user:{name:'Said'}, item:{title:'Asus ROG', price:23490.0, quantity:6}},
    ]
    this.selectedReservation = this.reservations[0];
  }

  onSelectReservation(r:any) {
    this.selectedReservation = r;
  }



}
