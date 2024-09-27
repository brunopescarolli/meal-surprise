import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Meal } from '../models/meal.model';
import { MealService } from './../service/meal.service';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})

export class MainPageComponent {
  @Input() meals: Meal[] = []

  visibleMeals: Meal[] = [];

  category: string = ""

  searchControl: FormControl = new FormControl<string>('')

  public constructor(private mealService:MealService, private router:Router){
  }

  ngOnInit(){
    this.category = this.categories[this.getRandomCategory(this.categories.length)]

    this.mealService.getMealbyCategoryHTTP(this.category).subscribe((response: any)=>this.visibleMeals=(response.meals as Meal[]))
    this.meals = this.mealService.getMeals()
    
    this.searchControl.valueChanges.subscribe(
      termo => {
        this.listCountries = this.countries.filter(country => country.strCountry.toUpperCase().includes(termo.toUpperCase()))
      }
    )
  }

  navCountryMeal(id: string){
    this.router.navigate(['/country-meal', id])
  }

  navMealInfo(id: string){
    this.router.navigate(['/meal-info', id])
  }

  categories = ['Beef',
                'Chicken', 
                'Dessert',
                'Lamb',
                'Miscellaneous',
                'Pasta',
                'Pork',
                'Seafood',
                'Side',
                'Starter',
                'Vegan',
                'Vegetarian',
                'Breakfast'];

  countries: Array<{strCountryMeal: string, strCountry: string, strFlag: string}> = [
    { strCountryMeal: 'Canadian', strCountry: 'Canada', strFlag: '/Imagens/Canadian.png'},
    { strCountryMeal: 'Chinese', strCountry: 'China', strFlag: '/Imagens/Chinese.png'},
    { strCountryMeal: 'Spanish', strCountry: 'Spain', strFlag: '/Imagens/Spanish.png'},
    { strCountryMeal: 'Egyptian', strCountry: 'Egypt', strFlag: '/Imagens/Egyptian.png'},
    { strCountryMeal: 'French', strCountry: 'France', strFlag: '/Imagens/French.png'},
    { strCountryMeal: 'Indian', strCountry: 'India', strFlag: '/Imagens/Indian.png'},
    { strCountryMeal: 'Italian', strCountry: 'Italy', strFlag: '/Imagens/Italian.png'},
    { strCountryMeal: 'Japanese', strCountry: 'Japan', strFlag: '/Imagens/Japanese.png'},
    { strCountryMeal: 'Moroccan', strCountry: 'Morocco', strFlag: '/Imagens/Moroccan.png'},
    { strCountryMeal: 'Portuguese', strCountry: 'Portugal', strFlag: '/Imagens/Portuguese.png'},
    { strCountryMeal: 'Ukrainian', strCountry: 'Ukraine', strFlag: '/Imagens/Ukrainian.png'}
  ];

  listCountries = this.countries
  
  getRandomCategory(max: number) {
    return Math.floor(Math.random() * max);
  }
}
