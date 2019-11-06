import {Component, OnInit} from '@angular/core';
import {Todo} from '../models/Todo';
import {Category} from '../models/Category';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  searchtext = '';
  newTodo: Todo;
  newCat: Category;
  newCategory: Category;
  private _todos: Todo[] = [];
  private _categories: Category[] = [];

  constructor() {
    this._todos.push(new Todo('Saufen'));
    this._todos.push(new Todo('Schlafen'));
    this._todos.push(new Todo('Essen'));
    this.newTodo = new Todo('');
    this._categories.push(new Category('Freizeit'));
  }

  ngOnInit() {
  }

  toggle(todo: Todo) {
    todo.done = !todo.done;
    console.log('todo update ' + todo.done);
  }

  save() {
    this._todos.push(this.newTodo);
    this._categories.push(this.newCat);
    this.newTodo = new Todo('');
    this.newCat = new Category('');
  }

  get categories() {
    return this._categories;
  }

  get todos() {
    this.searchtext = this.searchtext.toLowerCase();
    return this._todos.filter(t => {
      return t.label.toLowerCase().includes(this.searchtext);
    });
  }

  loeschen(todo: Todo) {
    this._todos = this._todos.filter(t => t !== todo);
  }
}
