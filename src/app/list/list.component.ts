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
  private _todos: Todo[] = [];
  private _categorys: Category[] = [];

  constructor() {
    this._categorys.push(new Category('Arbeit'));
    this._categorys.push(new Category('Freizeit'));
    this._categorys.push(new Category('Schule'));
    this._todos.push(new Todo('Saufen', this._categorys[1]));
    this._todos.push(new Todo('Schlafen', this._categorys[2]));
    this._todos.push(new Todo('Essen', this._categorys[1]));
    this.newTodo = new Todo('', null);
  }

  ngOnInit() {
  }

  toggle(todo: Todo) {
    todo.done = !todo.done;
    console.log('todo update ' + todo.done);
  }

  save() {
    this._todos.push(this.newTodo);
    this.newTodo = new Todo('',null);
  }

  get todos() {
    this.searchtext = this.searchtext.toLowerCase();
    return this._todos.filter(t => {
      return t.label.toLowerCase().includes(this.searchtext);
    });
  }

  get categories() {
    return this._categorys;
  }

  loeschen(todo: Todo) {
    this._todos = this._todos.filter(t => t !== todo);
  }
}
