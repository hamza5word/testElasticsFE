import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ITEM_RTE, SERVER_URI} from "../../../app.constants";

@Injectable({
  providedIn: 'root'
})
export class ItemRestService {

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get(SERVER_URI + ITEM_RTE);
  }

  getItem(id:any) {
    return this.http.get(SERVER_URI + ITEM_RTE + id);
  }

  reserveItem(data:any) {
    return this.http.post(SERVER_URI + ITEM_RTE + 'reserve', data);
  }

}
