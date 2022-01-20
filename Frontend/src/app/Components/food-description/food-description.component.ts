import { Component, OnInit } from '@angular/core';
import { MealService } from 'src/app/Service/meal.service';

@Component({
  selector: 'app-food-description',
  templateUrl: './food-description.component.html',
  styleUrls: ['./food-description.component.css']
})
export class FoodDescriptionComponent implements OnInit {

  mealDescription: any;

  constructor(private mealService: MealService) { }

  ngOnInit(): void {
    this.mealService.getById()
    .subscribe(res =>{
      console.log(res);
      this.mealDescription = res.meals[0];
    },
    err =>{
      console.log(err);
      
    })
  }

}
