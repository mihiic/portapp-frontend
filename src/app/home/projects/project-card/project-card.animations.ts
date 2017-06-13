import {animate, style, transition, trigger} from '@angular/animations';

export const ProjectCardAnimation = trigger('appProjectCard', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('250ms ease-in', style({
      opacity: 1,
    }))
  ])
]);
