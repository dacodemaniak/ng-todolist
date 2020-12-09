import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _todos: any[] = [];
  private filtrePriorite: number = 0;

  constructor() {
    this._todos.push(
      {
        id: 1,
        title: 'Todo 1',
        dateDebut: new Date(),
        priorite: 1
      }
    );
    this.todos.push(
      {
        id: 2,
        title: 'Todo 2',
        dateDebut: new Date(),
        priorite: 1
      }
    );
    this.todos.push(
      {
        id: 3,
        title: 'Todo 3',
        dateDebut: new Date(),
        priorite: 3
      }
    );
  }

  public get todos(): any[] {
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
