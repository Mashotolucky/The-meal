import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDescriptionComponent } from './food-description.component';

describe('FoodDescriptionComponent', () => {
  let component: FoodDescriptionComponent;
  let fixture: ComponentFixture<FoodDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
