import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Teacher} from '../../interfaces/teacher.interface'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  private teachers:Array<Teacher>
  private teachersSub = new Subject()

  constructor( private http:HttpClient) { }

  get getTeachers() {
    return this.teachersSub
  }

  getTeachersFromServer(){    
   this.http.get('http://localhost:3000/teachers').subscribe((teachers:Array<Teacher>)=>{
     this.teachers = teachers
     this.teachersSub.next([...this.teachers])     
   })
  }
}
