import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class StoreDataService {
  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) { }

  saveData () {
    const token = this.authService.getToken();

    return this.http.put('https://ng-recipe-book-f7f11.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  fetchData () {
    const token = this.authService.getToken();

    return this.http.get('https://ng-recipe-book-f7f11.firebaseio.com/recipes.json?auth=' + token)
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      )
  }
}
