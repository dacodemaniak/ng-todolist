import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public titleObject = {
    title: 'Fun TodoList',
    subTitle: 'Another Todo List',
    introTitle: 'All start with Todo'
  };

  /**
   * @var any[]
   * Tableau contenant les todos
   */
  public todos: any[] = [];

  public filtrePriorite: number = 0;

  public constructor() {
    this.todos.push(
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

  public receiveFilter(priorite: number): void {
    this.filtrePriorite = priorite;
  }
}
