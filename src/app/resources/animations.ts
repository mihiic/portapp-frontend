import { animate, style, transition, trigger } from '@angular/animations';

export const RouteAnimation = trigger('routeAnimation', [
  transition('void => *', [
    style({ opacity: 0.0, transform: 'translateY(20px)', zIndex: 2 }),
    animate('200ms ease-in', style({ opacity: 1.0, transform: 'translateY(0)'  }))
  ]),
  transition('* => void', [
    style({ opacity: 0, transform: 'translateY(0)', position: 'absolute'}),
  ]),
]);
