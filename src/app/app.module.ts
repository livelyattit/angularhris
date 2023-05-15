import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/layout/header/header.component';
import { FooterComponent } from './views/layout/footer/footer.component';
import { ShoppingComponent } from './views/shopping/shopping.component';
import { RecipeComponent } from './views/recipe/recipe.component';
import { RecipeListComponent } from './views/recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './views/recipe/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './views/shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './views/shopping/shopping-list/shopping-edit/shopping-edit.component';
import { RecipeDetailComponent } from './views/recipe/recipe-list/recipe-detail/recipe-detail.component';
import { SigninComponent } from './views/signin/signin.component';
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { FeatureColorDirective } from './views/shared/feature-color.directive';
import { BetterFeatureColorDirective } from './views/shared/better-feature-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    SigninComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    FeatureColorDirective,
    BetterFeatureColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
