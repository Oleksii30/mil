import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import {Course} from '../../interfaces/course.interface'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private courses:Array<Course>
  private coursesSub = new Subject()

  constructor(private http:HttpClient) { }

  get getCourses() {
    return this.coursesSub
  }

  getCoursesFromServer(){
    this.http.get('https://mil-pasos.herokuapp.com/courses').subscribe((courses:Array<Course>) => {
      this.courses = courses
      this.coursesSub.next([...this.courses])
    })
  }
}
