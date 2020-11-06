import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses/courses.service'
import { Course } from '../../interfaces/course.interface'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit, OnDestroy {

  public courses:Array<Course>
  public courseSub:Subscription

  constructor(private courseService:CoursesService) { }

  ngOnInit(): void {
    this.courseService.getCoursesFromServer()
    this.courseSub = this.courseService.getCourses.subscribe((courses:Array<Course>)=>{
      this.courses = courses
    })
  }
  ngOnDestroy(){
    this.courseSub.unsubscribe()
  }
}
