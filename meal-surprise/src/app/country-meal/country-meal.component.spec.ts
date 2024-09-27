import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryMealComponent } from './country-meal.component';

describe('CountryMealComponent', () => {
  let component: CountryMealComponent;
  let fixture: ComponentFixture<CountryMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryMealComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
