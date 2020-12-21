import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import {Story} from '../../interfaces/story.interface'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  private stories:Array<Story>
  private storiesSub = new Subject()

  constructor(private http:HttpClient) { }

  get getStories() {
    return this.storiesSub
  }

  getStoriesFromServer(){
    this.http.get('https://mil-pasos.herokuapp.com/reviews').subscribe((stories:Array<Story>) => {
      this.stories = stories
      this.storiesSub.next([...this.stories])
    })
  }
}
