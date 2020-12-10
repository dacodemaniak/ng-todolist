import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(
    public todoService: TodoService,
    private router: Router
  ) { }

  public goToDetail(id: number): void {
    this.router.navigate(['/', 'detail', id ]);
  }

  ngOnInit(): void {
  }

}
