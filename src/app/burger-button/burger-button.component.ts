import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-burger-button',
  templateUrl: './burger-button.component.html',
  styleUrls: ['./burger-button.component.scss']
})
export class BurgerButtonComponent implements OnInit {

  @Input() toggler

  constructor() { }

  ngOnInit(): void {
  }
  

}
