import { Component, OnInit } from '@angular/core';
import {
  trigger,  
  animate,
  transition  
} from '@angular/animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations:[
    trigger('loader', [
      transition(':leave', [
        animate('2.5s ease-out')
      ])
    ])
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
