import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { HomeComponent } from './pages/home/home.component';
import { TodoDetailComponent } from './pages/todo-detail/todo-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'add',
    component: AddTodoComponent
  },
  {
    path: 'detail/:id',
    component: TodoDetailComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
