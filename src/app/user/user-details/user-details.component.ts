import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() user:any;

  constructor() { }

  ngOnInit(): void {
  }

}
