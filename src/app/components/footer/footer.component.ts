import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() public titleObject;


  constructor(public userService: UserService) { }

  ngOnInit(): void {}

  public updateUser(): void {
    this.userService.setUsername('New name');
  }

}
