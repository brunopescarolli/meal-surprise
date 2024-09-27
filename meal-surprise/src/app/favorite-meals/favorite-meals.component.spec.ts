import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteMealsComponent } from './favorite-meals.component';

describe('FavoriteMealsComponent', () => {
  let component: FavoriteMealsComponent;
  let fixture: ComponentFixture<FavoriteMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteMealsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
