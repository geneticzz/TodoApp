import { Component, OnInit } from '@angular/core';
import {Todo} from '../models/Todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  searchTodo: Todo;
  newTodo: Todo;
  todos: Todo[] = [];
  constructor() {
    this.todos.push(new Todo('Saufen'));
    this.todos.push(new Todo('Schlafen'));
    this.todos.push(new Todo('Essen'));
    this.newTodo = new Todo('');
    this.searchTodo = new Todo('');
  }

  ngOnInit() {
  }

  toggle(todo: Todo) {
    todo.done = !todo.done;
    console.log('todo update ' + todo.done);
  }

  save() {
    this.todos.push(this.newTodo);
    this.newTodo = new Todo('');
  }

  loeschen(todo: Todo) {
    this.todos = this.todos.filter(t => t !== todo);
  }
}
