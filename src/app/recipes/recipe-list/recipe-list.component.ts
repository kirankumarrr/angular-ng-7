import { Component, OnInit } from '@angular/core';
import {Recipe } from "../recipe.model";
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [ 
    new Recipe('Kiran','Working', 'https://image.shutterstock.com/image-illustration/frontend-development-chart-keywords-icons-450w-491050822.jpg'),
     new Recipe('Kiran','Working', 'https://image.shutterstock.com/image-illustration/frontend-development-chart-keywords-icons-450w-491050822.jpg')
  ];
  constructor() { }

  ngOnInit() {
    debugger;
    console.log(this.arr);
  }

}