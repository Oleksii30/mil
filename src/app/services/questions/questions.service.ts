import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Question} from '../../interfaces/question.interface'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private questions:Array<Question>
  private questionsSub = new Subject()

  constructor(private http:HttpClient) { }

  get getQuestions() {
    return this.questionsSub
  }

  getQuestionsFromServer(){
    this.http.get('https://mil-pasos.herokuapp.com/questions').subscribe((questions:Array<Question>) => {
      this.questions = questions
      this.questionsSub.next([...this.questions])
    })
  }
}
