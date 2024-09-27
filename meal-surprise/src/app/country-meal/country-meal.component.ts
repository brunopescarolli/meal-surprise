import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

import { Meal } from '../models/meal.model';
import { MealService } from '../service/meal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-country-meal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './country-meal.component.html',
  styleUrls: ['./country-meal.component.scss']
})
export class CountryMealComponent {
  @Input() meals: Meal[] = []

  visibleMeals: Meal[] = [];

  filteredMeal: object[] = []

  searchControl: FormControl = new FormControl<string>('')

  country: string = '' 
  
  favorite:boolean = true;

  showSeeMore = true;
  
  listMeal = this.meals
  
  aux = 6

  constructor(private mealService: MealService,  private router:Router, private route: ActivatedRoute) {
    let favorite:boolean 
  }

  navMealInfo(id: string){
    this.router.navigate(['/meal-info', id])
  }

  ngOnInit(){
    this.route.params.subscribe(param => {
      this.country = param['id'];
    });

    this.mealService.getMealbyCountryHTTP(this.country).subscribe((response: any) => {
      this.visibleMeals = response.meals as Meal[];
      this.listMeal = [...this.visibleMeals];
    });

    this.searchControl.valueChanges.subscribe(
      termo => {
        console.log("Termo de busca:", termo);  // Debug: Verificar o termo de busca
        this.listMeal = this.visibleMeals.filter(meal => 
          meal.strMeal.toUpperCase().includes(termo.toUpperCase())
        );
        console.log("Refeições filtradas:", this.listMeal);  // Debug: Verificar a lista filtrada
      }
    );
  }

  isFavorite(id: string){
    if (localStorage.getItem(id) === null) {
      return false;
    }
    else{
      return true;
    }
  }

  addFavorite(id: string, image: string, name: string){
    this.mealService.addFavoriteHTTP(id, image, name)

    this.favorite = !this.favorite;
  }

  toggleMeals() {
    if (this.showSeeMore) {
      this.aux = this.visibleMeals.length
    } 
    else {
      this.aux = 6
    }
    this.showSeeMore = !this.showSeeMore;
  };

  toggleStar() {
  }
}
