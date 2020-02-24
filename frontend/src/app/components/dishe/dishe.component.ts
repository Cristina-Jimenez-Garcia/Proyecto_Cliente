import { Component, OnInit } from '@angular/core';
import { DishesService } from '../../services/dishes.service';
import { Dishe } from '../../models/dishe';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/users.service';
import { Restaurants} from '../../models/restaurant';
import { RestaurantsService } from '../../services/restaurants.service';

declare var M: any;

@Component({
  selector: 'app-dishe',
  templateUrl: './dishe.component.html',
  styleUrls: ['./dishe.component.css'],
  providers: [DishesService]
})
export class DisheComponent implements OnInit {
  public identity = null;
  public token = null;
  public restaurants;
  constructor(private dishesService: DishesService, private usersService: UserService, private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.getDishes();
    this.getRestaurants();
    this.identity = this.usersService.getIdentity();
    this.token = this.usersService.getToken();
  }

  getRestaurants(){
    this.restaurantsService.getRestaurants()
    .subscribe(res => {
        this.restaurants = res;
    });
  }

  addDishe(form:NgForm){

    if(form.value._id){
      this.dishesService.editDishe(form.value)
        .subscribe(res => {
           this.resetForm(form);
           M.toast({html:'Dishe updated successfully'});
           this.getDishes();
        });
    }else{
      this.dishesService.createDishe(form.value)
       .subscribe( res => {
         this.resetForm(form);
         M.toast({html:'Dishe save successfully'});
         this.getDishes();
     });
    }
  }

  deleteDishe(_id: String){
    if(confirm('Are you sure you want delete it?')){
      this.dishesService.deleteDishe(_id)
        .subscribe( res => {
          this.getDishes();
          M.toast({html:'Dishe deleted successfully'});
        });
    }
  }

  resetForm(form:NgForm){
    if(form){
      form.reset();
      this.dishesService.selectedDishe = new Dishe();
    }
  }

  editDishe(dishe: Dishe){
    this.dishesService.selectedDishe = dishe;
  }

  getDishes(){
    this.dishesService.getDishes()
    .subscribe(res => {
        this.dishesService.dishes = res as Dishe[];
    });
  }

}