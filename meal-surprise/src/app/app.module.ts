import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealService } from './service/meal.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[
    MealService
  ]
})
export class AppModule { }
