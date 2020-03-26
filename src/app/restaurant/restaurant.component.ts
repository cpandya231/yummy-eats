import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { restaurant } from './restaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restaurants:restaurant[];
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe(data => {
      // console.log(data);
      this.restaurants=data;
      this.restaurants.map(data=>{
        console.log(data.City)
      })
      
    })
  }

}
