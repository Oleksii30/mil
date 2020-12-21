import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses/courses.service'
import { QuestionsService } from '../../services/questions/questions.service'
import { Course } from '../../interfaces/course.interface'
import { Question } from '../../interfaces/question.interface'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit, OnDestroy {

  public courses:Array<Course> = new Array(8).fill({
    lenguage: '',
    level: '',
    price:'',  
    schedule: '',
    duration: '',
    description: '',
  })


  public courseSub:Subscription

  public questions:Array<Question>
  public questionSub:Subscription

  constructor(private courseService:CoursesService, private questionsService:QuestionsService) { }

  ngOnInit(): void {
   this.courseService.getCoursesFromServer()
    this.courseSub = this.courseService.getCourses.subscribe((courses:Array<Course>)=>{      
      this.courses = this.sortCourses(courses)   
      
    })

    this.questionsService.getQuestionsFromServer()
    this.questionSub = this.questionsService.getQuestions.subscribe((questions:Array<Question>)=>{
      this.questions = questions          
    })
  }
  sortCourses(array){
    array.sort((a,b)=>{
      if(a.lenguage ==='Іспанська' && b.lenguage === 'Англійська'){
        return -1
      }else if(b.lenguage ==='Іспанська' && a.lenguage === 'Англійська'){
        return 1
      }else if(a.lenguage === b.lenguage){
        if(b.level.charCodeAt(0) > a.level.charCodeAt(0)){
          return -1
        }else if(b.level.charCodeAt(0) < a.level.charCodeAt(0)){
          return 1
        }else{
          return a.level.charCodeAt(1) - b.level.charCodeAt(1)
        }         
      }
      return 0
    })
    return array
  }

  ngOnDestroy(){
    this.courseSub.unsubscribe()
    this.questionSub.unsubscribe()
  }
}
