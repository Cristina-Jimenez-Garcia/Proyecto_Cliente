import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from '../../models/order';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/users.service';

declare var M: any;

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [OrdersService]
})
export class OrdersComponent implements OnInit {
  public identity = null;
  public token = null;

  constructor(private ordersService: OrdersService, private usersService: UserService) { }

  ngOnInit() {
    this.getOrders();
    this.identity = this.usersService.getIdentity();
    this.token = this.usersService.getToken();
  }

  addOrder(form:NgForm){

    if(form.value._id){
      this.ordersService.editOrder(form.value)
        .subscribe(res => {
           this.resetForm(form);
           M.toast({html:'Order updated successfully'});
           this.getOrders();
        });
    }else{
      this.ordersService.createOrder(form.value)
       .subscribe( res => {
         this.resetForm(form);
         M.toast({html:'Order save successfully'});
         this.getOrders();
     });
    }
  }

  deleteOrder(_id: String){
    if(confirm('Are you sure you want delete it?')){
      this.ordersService.deleteOrder(_id)
        .subscribe( res => {
          this.getOrders();
          M.toast({html:'Order deleted successfully'});
        });
    }
  }

  resetForm(form:NgForm){
    if(form){
      form.reset();
      this.ordersService.selectedOrder = new Order();
    }
  }

  editOrder(order: Order){
    this.ordersService.selectedOrder = order;
  }

  getOrders(){
    this.ordersService.getOrders()
    .subscribe(res => {
        this.ordersService.orders = res as Order[];
    });
  }

}
