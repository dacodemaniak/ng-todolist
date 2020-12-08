import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() public filtrePriorite: number = 0;
  @Input() public todos: any[] = [];

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
  }

}
