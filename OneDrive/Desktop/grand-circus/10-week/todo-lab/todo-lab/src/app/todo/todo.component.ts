import { Component, OnInit } from '@angular/core';
import { Todo } from './../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    { task: 'take out the garbage', completed: false },
    { task: 'laundry', completed: false },
    { task: 'tutoring session', completed: true },
  ];
  constructor() {}

  ngOnInit(): void {}
  handleCompleted(i: number): void {
    this.todos[i].completed = !this.todos[i].completed;
  }
}
