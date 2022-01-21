import { Component, OnInit } from '@angular/core';
import { MealService } from 'src/app/Service/meal.service';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-food-description',
  templateUrl: './food-description.component.html',
  styleUrls: ['./food-description.component.css']
})
export class FoodDescriptionComponent implements OnInit {

  mealDescription: any;
  safeUrl: any;
  url: string = '';

  

  constructor(private mealService: MealService,
              private _sanitizer: DomSanitizer) {
               
               }

  ngOnInit(): void {
    this.foodDescription();
    
  }
  
  
  foodDescription(): void{
    this.mealService.getById()
    .subscribe(res =>{
      console.log(res);
      this.mealDescription = res.meals[0];
      this.url = this.mealDescription.strYoutube;

      let index = this.url.indexOf('=');

      console.log(this.url);

      console.log(index);

      this.url = this.url.slice(index + 1);

      console.log(this.url);
      
      this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.url}`);
    },
    err =>{
      console.log(err);
      
    });
  }

  

}


