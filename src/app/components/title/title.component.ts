import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() public titleObject;

  constructor(
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.setUsername('Jean-Luc');
  }

}
