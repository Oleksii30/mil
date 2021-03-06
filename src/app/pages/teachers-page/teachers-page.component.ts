import { Component, OnDestroy, OnInit } from '@angular/core';
import {TeachersService} from '../../services/teachers/teachers.service'
import {Teacher} from '../../interfaces/teacher.interface'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-teachers-page',
  templateUrl: './teachers-page.component.html',
  styleUrls: ['./teachers-page.component.scss']
})
export class TeachersPageComponent implements OnInit, OnDestroy {

  teachers:Array<Teacher> = new Array(2).fill({
    name: '',
    description:'',
    avatar:{
        first:'',
        second:'',
        third:'',
    },    
    header:'',
    quote:''
  }) 
  
    
  teachersSub:Subscription

  constructor( private teacherService: TeachersService ) { }

  ngOnInit(): void {
    this.teacherService.getTeachersFromServer()
    this.teachersSub = this.teacherService.getTeachers.subscribe((teachers:Array<Teacher>)=>{
      this.teachers = teachers.map(teacher => ({...teacher, description: teacher.description.split('//')})) 
                 
    })
  } 
  
  ngOnDestroy():void {
    this.teachersSub.unsubscribe()
  }
    
}
