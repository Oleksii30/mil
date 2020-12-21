import { style, animate, keyframes } from '@angular/animations';

/**********  Entries Animations ********************/

export const XpAnimations: any = {}

 
  XpAnimations['slide_in_bottom'] = (delay = '0s', timing = '0.95s') => {
    return animate(`${timing} ${delay} cubic-bezier(0.250, 0.460, 0.450, 0.940)`, keyframes([
    style({ transform: 'translateY(20px)', opacity: 0}),
    style({ transform: 'translateY(-5px)', opacity: 1}),
    style({ transform: 'translateY(0)', opacity: 1}),
  ]));
}
XpAnimations['slide_in_bend'] = (delay = '0s', timing = '0.95s') => {
  return animate(`${timing} ${delay} cubic-bezier(0.250, 0.460, 0.450, 0.940)`, keyframes([
  style({ transform: 'translateY(20px) rotate(-20deg)','transform-origin': 'top right', opacity: 0}),
  style({ transform: 'translateY(20px) rotate(0)','transform-origin': 'top right', opacity: 1}),
  style({ transform: 'translateY(0)', opacity: 1}),
]));
}
  