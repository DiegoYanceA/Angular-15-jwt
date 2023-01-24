import { animateChild, group, query, style, transition, trigger, animate } from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* => *', [
      query(':enter', [
        style({
          display: 'none'
        })
      ]),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ opacity: '0' }))
        ], 
        { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ opacity: '1' }))
        ])
      ])
    ])
  ]);