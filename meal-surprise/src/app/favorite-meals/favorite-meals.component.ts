import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router';
import { MealService } from '../service/meal.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-favorite-Meals',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './favorite-meals.component.html',
  styleUrl: './favorite-meals.component.scss'
})
export class FavoriteMealsComponent{
  cards: Array<{id: string, image: string, name: string}> = [
  ];

  searchControl: FormControl = new FormControl<string>('')

  favoriteMeals = this.cards

  favorite = true;

  binding: any = ''

  auxLS: any = [];

  auxSM = 6

  keys = Object.keys(localStorage)

  showSeeMore = true;

  constructor(private mealService: MealService,  
              private router:Router, 
              private route: ActivatedRoute
            ) {}

  ngOnInit(){
    this.searchControl.valueChanges.subscribe(
      termo => {
        this.favoriteMeals = this.cards.filter((card) => card.name.toUpperCase().includes(termo.toUpperCase()))
      }
    )

    let i = this.keys.length;

    while ( i-- ) {
      const item = localStorage.getItem(this.keys[i]);
    if (item) {
      const [id, image, name] = item.split("*");
      this.cards[i] = { id, image, name };
    }
    }
  }

  isFavorite(id: string){
    if (localStorage.getItem(id) === null) {
      this.favorite = false;
    }
    else{
      this.favorite = true;
    }
  }

  addFavorite(id: string, image: string, name: string){
    this.mealService.addFavoriteHTTP(id, image, name)
    this.favorite = !this.favorite;

    this.cards = this.cards.filter(c => c.id != id)
    this.favoriteMeals = this.cards

  }
  
  navMealInfo(id: string){
    this.router.navigate(['/meal-info', id])
  }

  toggleMeals() {
    if (this.showSeeMore) {
      this.auxSM = this.favoriteMeals.length
    } 
    else {
      this.auxSM = 6
    }
    this.showSeeMore = !this.showSeeMore;
  };
}
