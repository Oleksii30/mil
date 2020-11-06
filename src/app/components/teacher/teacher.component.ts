import { Component, Input, OnInit } from '@angular/core';
import {Teacher} from '../../interfaces/teacher.interface'

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  @Input() teacher:Teacher

  constructor() { }

  ngOnInit(): void {
  }

  onScroll($event){
    console.log('scroll', $event);        
  }

}
