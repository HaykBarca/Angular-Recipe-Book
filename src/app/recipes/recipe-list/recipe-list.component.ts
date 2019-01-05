import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { StoreDataService } from 'src/app/shared/store-data.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription

  constructor(private recipeService: RecipeService,
              private storeDataService: StoreDataService) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes
        }
      )

    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }
}