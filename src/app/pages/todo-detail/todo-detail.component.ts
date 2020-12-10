import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { TodoInterface } from 'src/app/models/todo-interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit, OnDestroy, AfterViewInit {
  private paramSubscription$: Subscription;

  public todo$: Observable<TodoInterface>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.paramSubscription$  = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id: any = paramMap.get('id');
      console.log(`Via subscription : ${id}`);
      this.todo$ = this.todoService.get(+id);
    });

    console.log('Je continue à exécuter...');
  }

  ngAfterViewInit() {
    console.log('View is complete');
  }

  ngOnDestroy(): void {
    console.log('Unsubscribe from TodoDetail');
    this.paramSubscription$.unsubscribe();
  }

}
