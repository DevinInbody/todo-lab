import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from './../interfaces/todo';
import { from } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Output() submitted = new EventEmitter<Todo>();
  todos: Todo[] = [
    { task: 'take out the garbage', completed: false },
    { task: 'laundry', completed: false },
    { task: 'tutoring session', completed: true },
  ];
  addTodo: string = '';
  constructor() {}

  ngOnInit(): void {}
  addTodoForm(form: NgForm) {
    this.submitted.emit({
      task: form.value.addTodo,
      completed: false,
    });
  }
  handleCompleted(i: number): void {
    this.todos[i].completed = !this.todos[i].completed;
  }
  handleDelete(i: number) {
    this.todos.splice(i, 1);
  }
  handleAdd(todos) {
    this.todos.push({
      task: todos.form.value.addTodo,
      completed: false,
    });
    console.log(todos);
    console.log(this.todos);
  }
  original = this.todos;
  handleFilter(todos) {
    if (todos.form.value.filterTodo === '') {
      this.todos = this.original;
      return this.todos;
    } else {
      const newFilter = this.todos.filter(
        (x) => x.task === todos.form.value.filterTodo
      );
      this.todos = newFilter;
      console.log(newFilter);
    }
  }
}
