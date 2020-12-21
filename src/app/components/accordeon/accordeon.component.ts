import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../interfaces/question.interface'
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group  
} from '@angular/animations';

@Component({
  selector: 'app-accordeon',
  templateUrl: './accordeon.component.html',
  styleUrls: ['./accordeon.component.scss'],
  animations:[
    trigger('accordeonH', [
      state('start', style({
       'max-height':'0',         
      })),
      state('end', style({
        'max-height':'24rem',        
      })),
      transition('start <=> end', [
        animate('.5s ease-in')
      ])
    ]),
    trigger('accordeonO', [
      state('start', style({
        opacity:0,         
      })),
      state('end', style({
        opacity:1,        
      })),
      transition('start <=> end', [
        animate('.5s ease-in-out')
      ])
    ]),
    trigger('accordeonX', [
      state('start', style({
        transform:'rotate(45deg)',         
       })),
       state('end', style({
        transform:'rotate(180deg)',        
       })),
       transition('start <=> end', [
         animate('.5s ease-in')
       ])
    ])
  ]
})
export class AccordeonComponent implements OnInit {

  accHeightState:string = 'start'
  accOpacityState:string = 'start'  

  @Input()question:Question
  @Input()index

  delay:string  

  constructor() { }

  ngOnInit(): void { 
    this.index = this.index+2
    this.delay = `0.${this.index}s`
  }

  open(){  
    if (this.accHeightState === 'end'){
      this.accOpacityState = 'start'
    }else{
      this.accHeightState = 'end'     
    }
  }
  onAccOpen($event){   
    if ($event.fromState === 'start'){
      this.accOpacityState = 'end'
    }    
  }
  onTextSowen($event){
    if ($event.fromState === 'end'){
      this.accHeightState = 'start'
    }    
  }

}
