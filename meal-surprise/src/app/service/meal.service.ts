import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Meal } from '../models/meal.model';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private url = environment.api
  private meals:Meal[] = []

  favoritesArray: any = ['0']
    
    constructor(private httpClient:HttpClient){

    }

    addFavoriteHTTP(id: string, image: string, name: string){
      const meal = id + '*' + image + '*' + name
      if (localStorage.getItem(id)) {
        localStorage.removeItem(id);
      } else {
        localStorage.setItem(id, meal);
      }
    }

    getHTTP(){
      return this.httpClient.get(`${this.url}`)
    }

    getMealHTTP(meal: string){
      return this.httpClient.get(`${this.url}/lookup.php?i=${meal}`)
    }

    getMealbyCategoryHTTP(category: string){
      return this.httpClient.get(`${this.url}/filter.php?c=${category}`)
    }

    getMealbyCountryHTTP(country: string){
      return this.httpClient.get(`${this.url}/filter.php?a=${country}`)
    }

    setMeals(meals:Meal[]){
      this.meals = meals
    }

    getMeals(){
      return this.meals
    }
}