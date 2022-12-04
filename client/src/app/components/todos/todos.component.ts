import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  task: string = '';

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false,
      },
      {
        content: 'Second todo',
        completed: true,
      },
      {
        content: 'Third todo',
        completed: false,
      },
    ];
  }

  toggleDone(id: number): void {
    this.todos.map((value, idx) => {
      if (idx == id) {
        value.completed = !value.completed;
      }
      return value;
    });
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((value, idx) => idx !== id);
  }

  addTodo(): void {
    this.todos = [...this.todos, { content: this.task, completed: false }];
    this.task = '';
  }
}
