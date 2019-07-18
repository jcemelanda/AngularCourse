import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-book.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Paella', 'Delicious spanish food', 'https://s2.glbimg.com/1wCHC6nGJ8PbSYa20N85f32NvEc=/1200x/smart/filters:cover():strip_icc()/s.glbimg.com/po/rc/media/2012/06/13/17/15/54/676/paella.jpg'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
