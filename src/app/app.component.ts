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

  public constructor() {}

}
