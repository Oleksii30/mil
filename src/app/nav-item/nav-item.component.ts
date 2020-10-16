import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {

  hoverEffect:boolean = false

  @Input() title:string

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
