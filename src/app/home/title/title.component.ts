import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../resources/user';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})

export class TitleComponent implements OnInit {
  public user: User;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUser().subscribe(
      (user) => this.user = user
    );
  }
}
