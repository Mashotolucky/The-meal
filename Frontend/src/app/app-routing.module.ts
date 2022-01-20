import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodDescriptionComponent } from './Components/food-description/food-description.component';
import { RecipeComponent } from './Components/recipe/recipe.component';

const routes: Routes = [
  {path: '', component: RecipeComponent},
  {path: 'mealdescription',component:FoodDescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
