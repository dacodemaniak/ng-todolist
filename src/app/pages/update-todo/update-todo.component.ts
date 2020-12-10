import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { TodoInterface } from 'src/app/models/todo-interface';
import { TodoService } from 'src/app/services/todo.service';

import * as moment from 'moment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.scss']
})
export class UpdateTodoComponent implements OnInit {
  public todoForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private todoService: TodoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  public get c(): any {
    return this.todoForm.controls;
  }

  public onSubmit(): void {
    this.todoService.update(this.todoForm.value);
    this.router.navigate(['/', 'home']);
    this.snackBar.open('Le todo a bien été mis à jour', null, {
      duration: 2000,
    });
  }

  ngOnInit(): void {
    this.todoService.get(+this.activatedRoute.snapshot.paramMap.get('id'))
      .pipe(
        take(1)
      ).subscribe((todo: TodoInterface) => {
        this.todoForm = this.formBuilder.group({
          id: [
            todo.id
          ],
          title: [
            todo.title,
            [
              Validators.required,
              Validators.minLength(5)
            ]
          ],
          dateDebut: [
            moment(todo.dateDebut).format('YYYY-MM-DD'),
            [
              Validators.required
            ]
          ],
          priorite: [
            todo.priorite,
            [
              Validators.min(1),
              Validators.max(3)
            ]
          ]
        })
      });
  }

}
