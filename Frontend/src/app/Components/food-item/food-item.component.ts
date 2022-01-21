import { Component, Input, OnInit } from '@angular/core';
import { MealService } from 'src/app/Service/meal.service';


@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {

  counter: number = 0
  list: any;

  constructor(private mealService: MealService) { }

  @Input() foodItem: any;

  ngOnInit(): void {
    this.getOneRandom()
  }

  meal: any;

  getOneRandom(): any{
    this.mealService.getRandom()
    .subscribe(res =>{
      console.log(res.meals[0]);
      this.meal = res.meals[0];
      
    },err=>{
      console.log(err);
      
    })
  }

  setMealId(id: any): void{
    this.mealService.setDetailMealId(id);
  }  

}

