import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoInterface } from '../models/todo-interface';
import { TodoModel } from '../models/todo-model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private filtrePriorite: number = 0;

  constructor(
    private httpClient: HttpClient
  ) {}

  public getTodos(): Observable<TodoInterface[]> {
    return this.httpClient.get<TodoInterface[]>(
      'http://localhost:4200/api/v2/todo'
    );
  }

  public set priorite(priorite: number) {
    this.filtrePriorite = priorite;
  }

  public get priorite(): number {
    return this.filtrePriorite;
  }
  
  public add(todoFormData: any): any {
    return this.httpClient.post(
      'http://localhost:4200/api/v2/todo',
      new TodoModel().deserialize(todoFormData)
    ).pipe(
      map((addedTodo: TodoInterface) => addedTodo)
    ).subscribe();
  }

  public get(id: number): Observable<TodoInterface> {
    return this.httpClient.get<TodoInterface>(
      'http://localhost:4200/api/v2/todo/' + id
    );
  }

  public filterNumber(): boolean {
    return true;
  }
}
