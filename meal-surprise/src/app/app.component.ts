import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalHeaderComponent } from "./global-header/global-header.component";
import { GlobalFooterComponent } from "./global-footer/global-footer.component";
import { MainPageComponent } from './main-page/main-page.component';
import { CountryMealComponent } from './country-meal/country-meal.component';
import { MealInfoComponent } from './meal-info/meal-info.component';
import { FavoriteMealsComponent } from "./favorite-meals/favorite-meals.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    GlobalHeaderComponent, 
    GlobalFooterComponent, 
    MainPageComponent, 
    CountryMealComponent, 
    MealInfoComponent, 
    FavoriteMealsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meal-surprise';

  
}
