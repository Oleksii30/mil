import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition  
} from '@angular/animations';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
  animations:[
    trigger('enter-links', [
      state('start', style({
        opacity: 0,
        transform:'translateY(-10px)'                        
      })),
      state('end', style({
        opacity: 1,
        transform:'translateY(0)'        
      })),
      transition('start => end', [
      animate(`.5s {{delayIn}} ease-in`)
    ]),
    transition('end => start', [
      animate(`.5s {{delayOut}} ease-out`)
    ])

    ])    
  ]
})
export class NavItemComponent implements OnInit {

  hoverEffect:boolean = false
  @Input() delayIn:string
  @Input() delayOut:string
 
  @Input() title:string
  @Input() expandMenu:boolean

  constructor() { }

  ngOnInit(): void {
  }
  onEnter() {
     this.hoverEffect = true
  }
  onLeave() {
    this.hoverEffect = false
  }

}
