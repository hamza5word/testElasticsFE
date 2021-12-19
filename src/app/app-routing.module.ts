import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {ItemComponent} from "./item/item.component";
import {ReservationComponent} from "./reservation/reservation.component";

export const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'users', component: UserComponent},
  {path: 'items', component: ItemComponent},
  {path: 'reservations', children: [
      {path: '', component: ReservationComponent},
      {path: ':id', component: ReservationComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
