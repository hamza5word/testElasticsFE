import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { ItemComponent } from './item/item.component';
import {FormsModule} from "@angular/forms";
import { ReservationComponent } from './reservation/reservation.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { ItemDetailsComponent } from './item/item-details/item-details.component';
import { MessageComponent } from './message/message.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavComponent,
    ItemComponent,
    ReservationComponent,
    UserDetailsComponent,
    ItemDetailsComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
