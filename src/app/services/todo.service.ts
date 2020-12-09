import { Injectable, OnInit } from '@angular/core';
import { TodoInterface } from '../models/todo-interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _todos: TodoInterface[] = [];
  private filtrePriorite: number = 0;

  constructor() {
    this._todos.push(
      {
        id: 1,
        title: 'Todo 1',
        dateDebut: new Date(),
        priorite: 1,
      }
    );
    this._todos.push(
      {
        id: 2,
        title: 'Todo 2',
        dateDebut: new Date(),
        priorite: 1
      }
    );
    this._todos.push(
      {
        priorite: 3,
        id: 3,
        title: 'Todo 3',
        dateDebut: new Date(),
      }
    );
  }

  public get todos(): TodoInterface[] {
    return this._todos;
  }

  public set priorite(priorite: number) {
    this.filtrePriorite = priorite;
  }

  public get priorite(): number {
    return this.filtrePriorite;
  }
  
  public filterNumber(): boolean {
    if (this._todos.length === 0) {
      return false;
    }

    return this.filtrePriorite !== 0 ? 
      this.todos.filter((obj: any) => obj.priorite === this.filtrePriorite).length > 0 
      : true;
  }
}
