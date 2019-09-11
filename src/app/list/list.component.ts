import { Component, OnInit } from '@angular/core';
import {Todo} from '../models/Todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  searchtext = '';
  newTodo: Todo;
  private _todos: Todo[] = [];
  constructor() {
    this._todos.push(new Todo('Saufen'));
    this._todos.push(new Todo('Schlafen'));
    this._todos.push(new Todo('Essen'));
    this.newTodo = new Todo('');
  }

  ngOnInit() {
  }

  toggle(todo: Todo) {
    todo.done = !todo.done;
    console.log('todo update ' + todo.done);
  }

  save() {
    this._todos.push(this.newTodo);
    this.newTodo = new Todo('');
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
