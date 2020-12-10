import { TodoModel } from './../../models/todo-model';
import { Injectable } from '@angular/core';

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS
} from '@angular/common/http'

import { Observable, of, throwError } from 'rxjs';
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';
import { TodoInterface } from 'src/app/models/todo-interface';

let todos: TodoInterface[] = JSON.parse(localStorage.getItem('todos')) || [];

@Injectable()
export class FakeBackendService implements HttpInterceptor {

  constructor() { }

  /**
   * intercept
   * @param request HttpRequest
   * @param next  HttpHandler
   * Intercepte une requête HTTP
   */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request

    console.log(`Request ${url} was intercepted`)

    return of(null)
      .pipe(
        mergeMap(handleRoute)
      ).pipe(
        materialize()
      ).pipe(
        delay(500)
      ).pipe(
        dematerialize()
      );

    function handleRoute(): Observable<HttpEvent<any>> {
      const todoRegex: RegExp = /\/api\/v2\/todo+$/;
      const todoFindRegex: RegExp = /\/api\/v2\/todo\/\d+$/;

      switch (true) {
        case todoRegex.test(url) && method === 'GET':
          return getTodos();
        case todoRegex.test(url) && method === 'POST':
          return addTodo(request);
        case todoFindRegex.test(url) && method === 'GET':
          return getTodo();
        default:
          return next.handle(request);
      }

      // route functions
      function addTodo(request: HttpRequest<any>): Observable<HttpResponse<any>> {
        const todo: TodoInterface = new TodoModel().deserialize(request.body);
        todo.id = todos.length + 1;
        todos.push(todo);
        // Persister le tableau entier
        localStorage.setItem('todos', JSON.stringify(todos));
        // Retourner l'observable du User créé
        return ok(todo);
      }

      function getTodo(): Observable<HttpResponse<any>> {
        console.log(`End URL : ${idFromUrl()}`);
        const todo: TodoInterface = todos.find((obj: TodoInterface) => obj.id === idFromUrl());
        if (todo === undefined) {
          console.log(`Undefined was found return 404`);
          return notFound();
        }
        console.log(`Todo was found, return 200`);
        return ok(todo);
      }

      function getTodos():Observable<HttpResponse<any>> {
        return ok(todos);
      }

      // helper functions

      function ok(body?: any): Observable<HttpResponse<any>> {
        return of(new HttpResponse({ status: 200, body }));
      }

      function notFound(): Observable<HttpResponse<any>> {
        return of(new HttpResponse({status: 404}));
      }

      function error(message): Observable<never> {
        return throwError({ error: { message } });
      }

      function unauthorized(): Observable<never> {
        return throwError({ status: 401, error: { message: 'Unauthorised' } });
      }

      function isLoggedIn(): boolean {
        return headers.get('Authorization') === 'Bearer fake-jwt-token';
      }

      function idFromUrl(): number | string {
        const urlParts = url.split('/');
        const suffix: number = +urlParts[urlParts.length - 1];
        if (!isNaN(suffix)) {
          return suffix;
        }
        return urlParts[urlParts.length - 1];
      }
    }
  }
}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendService,
  multi: true
}