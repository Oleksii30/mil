import {
    trigger,
    state,
    style,
    animate,
    transition  
  } from '@angular/animations';

export const enterAnimation = [
    trigger('enter', [
      state('start', style({
        opacity:'0'
      })),
      state('end', style({
        opacity:'1'
      })),
      transition('start => end', [
        animate('.5s ease-in')
      ])
    ])    
  ]

export const headerAnimations = [
  trigger('expand-header', [
    state('closed', style({
      width:"0px"
    })),
    state('open', style({
      width:"8rem"
    })),
    transition('closed => open', [
      animate('1s ease-in')
    ])
  ]),
  trigger('expand-menu', [
    state('closed', style({
      width:"0px"
    })),
    state('open', style({
      width:"15rem"        
    })),
    transition('closed => open', [       
        animate('1s ease-in-out'),             
      
    ]),
    transition('open => closed', [
      animate('1s 1.7s ease-in-out')
    ])
  ])
]