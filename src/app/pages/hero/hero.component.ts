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
        animate('.1s 2s ease-out')
      ])
    ]),
    
  ]
})
export class HeroComponent implements OnInit {
 
  mainImageUrl:string ='https://lh3.googleusercontent.com/9pj8_kNB7v44gq8jpQnns6irBB-ecUUfFGoI4iwXtQMmvBHtlkt2NVitkYcNtixti8RzbUqDT7YWBxAhemEmUbMtHy5A9MuNMwQZDtO9CXan0aAhQklhJuJAcPjA9kLvv9twx5v2cw=w2400'
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
