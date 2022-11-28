import { Component, OnInit } from '@angular/core';
import {Todo} from "./model/todo";
import {TodoService} from "./service/todo.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
  }

  content = new FormControl();

  ngOnInit(): void {
    this.todoService.getAll().subscribe(todos => {
      this.todos = todos;
    })
  }

  toggleTodo(todo: Todo) {
    todo.complete = !todo.complete;
    this.todoService.updateTodo(todo).subscribe(()=>{
      this.ngOnInit();
    })
  }

  change() {
    const value = this.content.value;
    if (value) {
      let todo: Todo = {
        content: value,
        complete: false
      };

      this.todoService.saveTodo(todo).subscribe(()=>{
        this.content.reset();
        this.ngOnInit();
      });
    }
  }

  deleteTodo(todo) {
    this.todoService.deleteTodo(todo).subscribe(()=>{
      console.log('delete success');
    })
  }
}
