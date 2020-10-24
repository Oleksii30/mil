import { Component, OnInit, Input } from '@angular/core';
import {enterAnimation} from '../../animations/animations'

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  animations: enterAnimation
})
export class LogoComponent implements OnInit {
  @Input() finishedExpand

  constructor() { }

  ngOnInit(): void {
  }

}
