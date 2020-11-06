import { Component, OnInit } from '@angular/core';
import {
  trigger,  
  animate,
  transition,
  state,
  style,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations:[
    trigger('loader', [
      transition(':leave', [
        animate('.1s ease-out')
      ])
    ]),
    /*trigger('name1',[
      state('start', style({
        transform:'translateX(-8rem)',
        opacity:0
      })),
      state('end', style({
        transform:'translateX(0)',
        opacity:1
      })),
      transition('start  => end', animate('1s ease-in', keyframes([
        style({ transform:'translateX(-8rem)', opacity:0, offset:0}),
        style({ transform:'translateX(2rem)', opacity:1, offset:0.9}),
        style({ transform:'translateX(0)', opacity:1, offset:1}),
      ])))
    ]),
    trigger('name2',[
      state('start', style({
        transform:'translateX(8rem)',
        opacity:0
      })),
      state('end', style({
        transform:'translateX(0)',
        opacity:1
      })),
      transition('start  => end', animate('1s ease-in', keyframes([
        style({ transform:'translateX(8rem)', opacity:0, offset:0}),
        style({ transform:'translateX(-2rem)', opacity:1, offset:0.9}),
        style({ transform:'translateX(0)', opacity:1, offset:1}),
      ])))
    ])*/
  ]
})
export class HeroComponent implements OnInit {

  mainImageUrl:string = 'https://lh3.googleusercontent.com/IUG_6wT_G-EuAHZ3nG6KB4k4R4QVDVZf_lrkzweIrkelO01rB7t76eOXq1w5pxhfb_DAAz1GGgnp1uCn8j6p3vuYGrkzkpbGJbErvo8ji2R4LYFUyeUIQZupZ7-cp-EXM2YShfsG7w=w2400'
  finishedLoading:boolean = false
  loading:boolean = true
 
  constructor() { }

  ngOnInit(): void {
  }
  onImageLoad() {        
     this.loading = false   
  }
  onLeave(event) {     
    if (event.toState === 'void') {     
      this.finishedLoading = true 
    }                 
  }
}
