import { Injectable } from '@angular/core';

@Injectable()
export class AnimationService {
  public projectsAnimation: String;

  constructor() {
    this.projectsAnimation = 'router';
  }

  public setProjectsAnimation(animation: String) {
    this.projectsAnimation = animation;
  }

  public changedRoute(): void {
    this.projectsAnimation = 'router';
  }
}
