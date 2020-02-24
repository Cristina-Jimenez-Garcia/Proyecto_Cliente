import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurants } from '../models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  readonly URL_API = 'http://localhost:3000/api/restaurants';
  selectedRestaurant: Restaurants;
  restaurants: Restaurants[];

  constructor(private http: HttpClient) { 
    this.selectedRestaurant = new Restaurants();
  }

  getRestaurants(){
    return this.http.get(this.URL_API);
  }

  createRestaurant(restaurant: Restaurants){
  return this.http.post(this.URL_API, restaurant);
  }

  editRestaurant(restaurant: Restaurants){
    return this.http.put(this.URL_API+`/${restaurant._id}`, restaurant);
  }

  deleteRestaurant(_id: String){
    return this.http.delete(this.URL_API+`/${_id}`);
  }
}
