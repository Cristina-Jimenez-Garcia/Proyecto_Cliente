import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  readonly URL_API = 'http://localhost:3000/api/orders';
  selectedOrder: Order;
  orders: Order[];

  constructor(private http: HttpClient) { 
    this.selectedOrder = new Order();
  }

  getOrders(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.get(this.URL_API, httpOptions);
  }

  createOrder(order: Order){
  return this.http.post(this.URL_API, order);
  }

  editOrder(order: Order){
    return this.http.put(this.URL_API+`/${order._id}`, order);
  }

  deleteOrder(_id: String){
    return this.http.delete(this.URL_API+`/${_id}`);
  }
}
