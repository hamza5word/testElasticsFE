import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharUtilsService {

  constructor() { }

  upperFirstChar(data:any) {
    return data[0].toUpperCase() + data.substr(1);
  }

}
