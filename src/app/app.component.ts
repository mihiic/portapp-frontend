import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import {AnimationService} from "./services/animation.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private router: Router,
    private animationsService: AnimationService
  ) {
    this.router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe(() => {
        this.animationsService.changedRoute();
      });
  }
}
