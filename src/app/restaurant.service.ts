import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { restaurant } from './restaurant/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private httpClient: HttpClient) { }
  lambdaURL: string = "https://twp3bg9fbk.execute-api.us-east-1.amazonaws.com/latest/api/restaurants"
  lambdaURLLocal: string = "http://localhost:3000/api/restaurants"
  getRestaurants() {
    return this.httpClient.get<restaurant[]>(this.lambdaURL);
  }

  getRestaurantsByCity(city, restaurantId) {
    return this.httpClient.get<restaurant>(`${this.lambdaURL}?city=${city}&restaurantID=${restaurantId}`);
  }
}
