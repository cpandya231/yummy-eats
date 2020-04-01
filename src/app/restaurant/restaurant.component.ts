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

  restaurants: restaurant[];
  selectedRestaurant: any;
  restaurantInfoDisplay: string;




  constructor(private restaurantService: RestaurantService,
    private router: Router) { 
      
      this.restaurantInfoDisplay = 'restaurant-info-container restaurant-info-container-hide'; 
    }

  ngOnInit(): void {
    
    this.restaurantService.getRestaurants().subscribe(data => {
      // console.log(data);
      this.restaurants = data;
   this.selectedRestaurant=this.restaurants[0];
    })



  }

  getRestauranrInfo(city, restaurantID): void {
    var filteredList = this.restaurants.filter((rest) => {
      return rest.City == city && rest["Restaurant ID"] == restaurantID;
    })
    // var value = idAttr.nodeValue;
    this.selectedRestaurant = filteredList[0];
    this.restaurantInfoDisplay = 'restaurant-info-container restaurant-info-container-show';


  }

  closeContainer() {
    this.restaurantInfoDisplay = 'restaurant-info-container restaurant-info-container-hide';
  }

}
