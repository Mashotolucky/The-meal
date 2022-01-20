import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MealService {

  mealId: any = '';

  constructor(private http: HttpClient) { }
  
  getTitle(title: string): Observable<any>{
    return this.http.get('www.themealdb.com/api/json/v1/1/search.php?s='+title)
  }

  getRandom():Observable<any> {
   
    return this.http.get('https://www.themealdb.com/api/json/v1/1/random.php');
  }

  setDetailMealId(id:any): void{
    this.mealId = id;
  }

  getById(): Observable<any>{
    return this.http.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+this.mealId)
  }

}
