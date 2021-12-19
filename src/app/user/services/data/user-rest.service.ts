import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SERVER_URI, USER_RTE} from "../../../app.constants";

@Injectable({
  providedIn: 'root'
})
export class UserRestService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(SERVER_URI + USER_RTE);
  }

  getUser(id:any) {
    return this.http.get(SERVER_URI + USER_RTE + id);
  }

  getUserReservations(user:any) {
    return this.http.get(user._links.reservations.href.replace('{?projection}', ''));
  }

}
