import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public filtrePriorite: number = 0;
  @Input() public todos: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
