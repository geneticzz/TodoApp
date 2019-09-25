import {Category} from './Category';

export class Todo {
  done: boolean;

  constructor(public label: string, public cat: Category) {
    this.done = false;
  }
}
