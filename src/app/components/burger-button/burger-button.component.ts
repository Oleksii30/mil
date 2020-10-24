import { Component, Input, OnInit } from '@angular/core';
import {enterAnimation} from '../../animations/animations'

@Component({
  selector: 'app-burger-button',
  templateUrl: './burger-button.component.html',
  styleUrls: ['./burger-button.component.scss'],
  animations: enterAnimation
})
export class BurgerButtonComponent implements OnInit {

  @Input() toggler
  @Input() finishedExpand

  constructor() { }

  ngOnInit(): void {
  }
  

}
