import { Component, Input, OnInit } from '@angular/core';
import {headerAnimations} from '../../animations/animations'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: headerAnimations
})
export class HeaderComponent implements OnInit {

  @Input() animations:boolean

  toggler:boolean = false
  finishedExpand:boolean = false  
  showMenu:boolean = false
  menu:boolean = false

  constructor() {    
   }

  ngOnInit(): void {
      
  }
  toggleButton() {
    this.toggler = !this.toggler  
  }
  end(event){
    if (event.toState === 'open') {     
      this.finishedExpand = true      
    }         
  }
  doneMenuAnimation(event){
    if (event.toState === 'open') {     
      this.showMenu = true      
    }else if (event.toState === 'closed') {
      this.menu = false
    }   
  }
  startMenuAnimation(event){
    if (event.toState === 'closed') {                
      this.showMenu = false     
    }else if (event.toState === 'open') {
      this.menu = true
    } 
  }
  
}
