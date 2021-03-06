import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeComponent } from './Components/recipe/recipe.component';
import { FoodItemComponent } from './Components/food-item/food-item.component';
import { FoodDescriptionComponent } from './Components/food-description/food-description.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FindItemComponent } from './Components/find-item/find-item.component';





@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    FoodItemComponent,
    FoodDescriptionComponent,
    FindItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
