import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipeDetails: any;

  constructor(private dialogRef: MatDialogRef<RecipeDetailsComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.recipeDetails = data;
  }

  ngOnInit() {
    console.log(this.recipeDetails);
  }
  openLink() {
    window.open(this.recipeDetails.recipe_link);
  }
  close() {
    this.dialogRef.close();
  }

}
