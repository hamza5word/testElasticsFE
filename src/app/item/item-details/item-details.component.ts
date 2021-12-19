import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  @Input() item:any;

  constructor() { }

  ngOnInit(): void {
  }

}
