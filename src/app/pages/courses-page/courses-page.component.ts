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

  public courses:Array<Course>
  public courseSub:Subscription

  public questions:Array<Question>
  public questionSub:Subscription

  constructor(private courseService:CoursesService, private questionsService:QuestionsService) { }

  ngOnInit(): void {
    this.courseService.getCoursesFromServer()
    this.courseSub = this.courseService.getCourses.subscribe((courses:Array<Course>)=>{
      this.courses = courses
    })

    this.questionsService.getQuestionsFromServer()
    this.questionSub = this.questionsService.getQuestions.subscribe((questions:Array<Question>)=>{
      this.questions = questions
      console.log('questions',this.questions);      
    })
  }
  ngOnDestroy(){
    this.courseSub.unsubscribe()
    this.questionSub.unsubscribe()
  }
}
