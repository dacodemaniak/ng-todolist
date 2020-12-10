import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoInterface } from 'src/app/models/todo-interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todos$: Observable<TodoInterface[]>;

  constructor(
    private todoService: TodoService,
    private router: Router
  ) { }

  public goToDetail(id: number): void {
    this.router.navigate(['/', 'detail', id ]);
  }

  ngOnInit(): void {
    this.todos$ = this.todoService.getTodos();
  }

}
