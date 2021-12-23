import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos : Todo[]
  constructor() { 
    this.todos = [
      {
        sno : 1,
        title : 'This is title',
        desc : 'Hello angular app',
        active : true
      },
      {
        sno : 2,
        title : 'Apple',
        desc : 'Apple is good for health  ',
        active : true
      }
    ];
  }

  ngOnInit(): void {
  }

  deleteTodo(todo : Todo){
    console.log(todo)
    const index = this.todos.indexOf(todo)
    this.todos.splice(index,1)
  }
  addTodo(todo : Todo){
    console.log(todo)
    this.todos.push(todo)
  }
}
