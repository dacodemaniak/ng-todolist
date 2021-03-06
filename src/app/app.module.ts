import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { FooterComponent } from './components/footer/footer.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from './shared/ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ElapsedPipe } from './pipes/elapsed.pipe';
import { HttpClientModule } from '@angular/common/http';
import { TodoDetailComponent } from './pages/todo-detail/todo-detail.component';
import { fakeBackendProvider } from './shared/helpers/fake-backend.service';
import { UpdateTodoComponent } from './pages/update-todo/update-todo.component';
@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    FooterComponent,
    TodoListComponent,
    FilterBarComponent,
    AddTodoComponent,
    HomeComponent,
    ElapsedPipe,
    TodoDetailComponent,
    UpdateTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UiModule
  ],
  providers: [
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
