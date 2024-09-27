import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealInfoComponent } from './meal-info.component';

describe('MealInfoComponent', () => {
  let component: MealInfoComponent;
  let fixture: ComponentFixture<MealInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
