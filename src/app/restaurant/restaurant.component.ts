import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { restaurant } from './restaurant';
import { Router } from '@angular/router';



@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restaurants:restaurant[];
  constructor(private restaurantService: RestaurantService,
    private router: Router) { }

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe(data => {
      // console.log(data);
      this.restaurants=data;
      this.restaurants.map(data=>{
        console.log(data.City)
      })
      
    })
  }

  getRestauranrInfo():void{
    console.log("Restaurant triggered");
    this.router.navigate(['restaurant-info']);
  }

}
