import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Course } from '../../interfaces/course.interface'

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  popupOpen = false
  translate
  transform
  
  @Input()course:Course
  @Input()index

  constructor() { }

  onPopupOpen(){
    this.popupOpen = true
  }
  onPopupClose($event){
    this.popupOpen = false
  }

  ngOnInit(): void {
    this.translate = `${(this.index % 3)*30}px`    
    this.transform = {
      'transform': `skewY(5deg) translateY(${this.translate})`
    }
  }


  
}
