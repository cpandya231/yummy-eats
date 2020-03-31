import { Component, OnInit, Input } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { restaurant } from '../restaurant/restaurant';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrls: ['./restaurant-info.component.css']
})
export class RestaurantInfoComponent implements OnInit {

   city: string;
  restaurantID: string;
  restaurant: restaurant;
  constructor(private restaurantService: RestaurantService
    ,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  this.route.queryParams.subscribe(params=>{
    this.city=params['city'];
    this.restaurantID=params['restaurantID'];
    this.restaurantService.getRestaurantsByCity(this.city, this.restaurantID).subscribe(data => {
      this.restaurant = data[0];
      console.log(this.restaurant);
    })
  })
  
  }

  closeContainer(){
    this.router.navigate(['']);
  }

}
