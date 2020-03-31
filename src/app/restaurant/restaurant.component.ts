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
     
      
    })
  }

  getRestauranrInfo():void{
    console.log("Restaurant triggered");

    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target['id'].split("-");
    
    // var value = idAttr.nodeValue;
    this.router.navigateByUrl(`/restaurant-info?city=${idAttr[1]}&restaurantID=${idAttr[0]}`);
  }

}
