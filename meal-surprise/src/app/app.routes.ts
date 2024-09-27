import { Routes } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { CountryMealComponent } from './country-meal/country-meal.component';
import { MealInfoComponent } from './meal-info/meal-info.component';
import { FavoriteMealsComponent } from "./favorite-meals/favorite-meals.component";


export const routes: Routes = [ {path: '', component: MainPageComponent},
                                {path: 'favorite', component: FavoriteMealsComponent},
                                {path: 'meal-info/:id', component: MealInfoComponent},
                                {path: 'country-meal/:id', component: CountryMealComponent}     
];

