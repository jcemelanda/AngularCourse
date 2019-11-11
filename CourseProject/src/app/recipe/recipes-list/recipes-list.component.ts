import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test description', 'https://cdn.apartmenttherapy.info/image/upload/v1564775676/k/Photo/Recipes/2019-08-how-to-juiciest-turkey-meatballs/How-to-Make-the-Best-Juiciest-Turkey-Meatballs_055.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
