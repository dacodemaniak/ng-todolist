import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import * as moment from 'moment';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  public todoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService,
    private router: Router
  ) { }

  public get title(): AbstractControl {
    return this.todoForm.controls.title;
  }

  public get dateDebut(): AbstractControl {
    return this.todoForm.controls.dateDebut;
  }

  public get priorite(): AbstractControl {
    return this.todoForm.controls.priorite;
  }

  public get c() {
    return this.todoForm.controls;
  }

  public getControl(control: string): AbstractControl {
    return this.todoForm.controls[control];
  }

  public onSubmit(): void {
    this.todoService.add(this.todoForm.value);
    this.router.navigate(['/home']);

  }

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(5)
        ]
      ],
      dateDebut: [
        moment().format('YYYY-MM-DD'),
        [
          Validators.required
        ]
      ],
      priorite: [
        1,
        [
          Validators.required,
          Validators.min(1),
          Validators.max(3)
        ]
      ]
    });
  }

}
