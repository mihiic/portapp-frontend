import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../resources/user';
import { RouteAnimation } from '../../resources/animations';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [ UserService ],
  animations: [ RouteAnimation ]
})
export class HomepageComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUser().subscribe(
      user => this.user = user
    );
  }
}
