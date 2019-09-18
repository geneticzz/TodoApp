export class Todo {
  done: boolean;
  category: any;

  constructor(public label: string) {
    this.category = null;
    this.done = false;
  }
}
