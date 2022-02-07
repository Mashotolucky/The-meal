import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindItemComponent } from './Components/find-item/find-item.component';
import { FoodDescriptionComponent } from './Components/food-description/food-description.component';
import { RecipeComponent } from './Components/recipe/recipe.component';

const routes: Routes = [
  {path: '', component: RecipeComponent},
  {path: 'mealdescription',component:FoodDescriptionComponent},
  {path: 'findItem', component: FindItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
