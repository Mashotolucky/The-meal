import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { MealService } from 'src/app/Service/meal.service';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  [x: string]: any;

  foodlist: object[] = [];

  formSearch = new FormGroup({
    searchInput: new FormControl('')
  })

  constructor(private formbuilber: FormBuilder,
              private mealService: MealService) { }

  ngOnInit(): void {
    // this.formSearch = this.formbuilber.group({
    //   searchInput: ['']
    // });
    // let item = this.getOneRandom()
    // console.log(item.meals[0])
    // this.foodlist = [item, item]
    // this.foodlist.push(
    //   this.getOneRandom()
    // );

    
  }

  searchTitle(): void{
    this.mealService.getTitle(this.formSearch.value.searchInput)
    .subscribe(res =>{
      console.log(res);
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
      console.log(res);
      return res;
      
    },err=>{
      console.log(err);
      
    })
  }

}
