import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MealService } from 'src/app/Service/meal.service';

@Component({
  selector: 'app-find-item',
  templateUrl: './find-item.component.html',
  styleUrls: ['./find-item.component.css']
})
export class FindItemComponent implements OnInit {

  
 findMeal: any;
  meal: any;

  formSearch = new FormGroup({
    searchInput: new FormControl('')
  })

  constructor(private formbuilber: FormBuilder,
              private mealService: MealService) { }

  ngOnInit(): void {
 
    
  }

  setMealId(id: any): void{
    this.mealService.setDetailMealId(id);
  }  

  searchTitle(): void{
    this.mealService.getTitle(this.formSearch.value.searchInput)
    .subscribe(res =>{
      console.log(res);
      this.findMeal = res;
      this.formSearch.reset();
    },
    err=>{
      console.log(err);
      this.formSearch.reset();
    });
  }

  getOneRandom(): any{
    this.mealService.getRandom()
    .subscribe(res =>{
      console.log(res.meals[0]);
      this.meal = res.meals[0];
      
    },err=>{
      console.log(err);
      
    })
  }

  run():void{
    this.searchTitle();
  
  }

}
