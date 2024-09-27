import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealService } from '../service/meal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal } from '../models/meal.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-meal-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meal-info.component.html',
  styleUrl: './meal-info.component.scss'
})
export class MealInfoComponent {
  @Input() meals: Meal[] = []

  visibleMeals: Meal[] = [];

  safeLink: SafeResourceUrl = ''

  mealID: string = ''

  favorite = true;

  seeMoreIng = true;
  seeMoreIns = true;
  seeMoreVid = true;

  constructor(private mealService: MealService,  
              private router:Router, 
              private route: ActivatedRoute,
              public sanitizer: DomSanitizer
              ){}

  ngOnInit(){
    this.route.params.subscribe(param => {
      this.mealID = param['id'];
    });

    this.mealService.getMealHTTP(this.mealID).subscribe((response: any)=>this.visibleMeals=(response.meals as Meal[]))
    this.meals = this.mealService.getMeals()

    if (localStorage.getItem(this.mealID) === null) {
      this.favorite = false;
    }
    else{
      this.favorite = true;
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
  }

  partLink: string[] = []

  auxYT: any [] = []

  getMealYT(link: string){
    this.partLink = link.split('/')
    this.auxYT = this.partLink[3].split('=')
    this.partLink[4] = this.auxYT[1]
    this.partLink[3] = 'embed'
    link = this.partLink.join('/')
    this.safeLink = this.sanitizer.bypassSecurityTrustResourceUrl(link)

    return this.safeLink
  }

  ingMeasure: any[] = []

  auxMI: any [] = []

  getMealIng(meal: any){
    for(let i = 0; i<20; i++){
      if(meal[`strMeasure${i}`] + ' ' + meal[`strIngredient${i}`] == ' ' || 
        meal[`strMeasure${i}`] + ' ' + meal[`strIngredient${i}`] == '  ' || 
        meal[`strMeasure${i}`] + ' ' + meal[`strIngredient${i}`] == 'undefined undefined' || 
        meal[`strMeasure${i}`] + ' ' + meal[`strIngredient${i}`] == 'null null')
        {}
      else{
      this.ingMeasure[i] = meal[`strMeasure${i}`] + ' ' + meal[`strIngredient${i}`]
      this.ingMeasure = this.ingMeasure.filter(function (i) {
        return i; 
      });
    }
    }

    return this.ingMeasure
  }


  moreIng(){
    this.seeMoreIng = !this.seeMoreIng;
  }

  moreIns(){
    this.seeMoreIns = !this.seeMoreIns;
  }

  moreVid(){
    this.seeMoreVid = !this.seeMoreVid;
  }
}
