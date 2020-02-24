import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dishe } from '../models/dishe';

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  readonly URL_API = 'http://localhost:3000/api/dishes';
  selectedDishe: Dishe;
  dishes: Dishe[];

  constructor(private http: HttpClient) { 
    this.selectedDishe = new Dishe();
  }

  getDishes(){
    return this.http.get(this.URL_API);
  }

  createDishe(dishe: Dishe){
  return this.http.post(this.URL_API, dishe);
  }

  editDishe(dishe: Dishe){
    return this.http.put(this.URL_API+`/${dishe._id}`, dishe);
  }

  deleteDishe(_id: String){
    return this.http.delete(this.URL_API+`/${_id}`);
  }
}
