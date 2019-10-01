import { Component, OnInit, OnChanges, Input, ViewChild } from '@angular/core';
import { DashboardReceipeService } from '../../services/dashboard-receipe.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private _value: any;
  filteredRecipes = [];
  recipes: any;
  breakpoint: number = 0;

  constructor(private recipeservice: DashboardReceipeService, private dialog: MatDialog) { }

  ngOnInit() {
    this.recipeservice.getRecipees().subscribe(res => {
      this.recipes = res;
      this.filteredRecipes = this.recipes;
    });
    this.breakpoint = (window.innerWidth <= 1024) ? 1 : 3;
  }
  get value(): string {
    return this._value;
  }
  set value(value: string) {
    this._value = value;
    this.filteredRecipes = this.filteredRecipees(value);
  }
  filteredRecipees(searchTerm: string) {
    return this.recipes.filter(recipe =>
      recipe.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }
  openRecipeDetails(recipeDetails) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = recipeDetails;
    this.dialog.open(RecipeDetailsComponent, dialogConfig);
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 1024) ? 1 : 3;
  }
  onThumbup(recipename) {
    document.getElementById('green-' + recipename).style.color = 'green';
    document.getElementById('red-' + recipename).style.color = '#70534d';
  }
  onThumbdown(recipename) {
    document.getElementById('red-' + recipename).style.color = '#f55353';
    document.getElementById('green-' + recipename).style.color = '#70534d';
  }
  onSubscribe(recipename) {
    document.getElementById('yellow-' + recipename).style.color = '#FF4500';
  }
}
