import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {StoriesService} from '../../services/stories/stories.service'
import {Story} from '../../interfaces/story.interface'
import { Subscription } from 'rxjs';
import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import { SwiperOptions } from 'swiper';
import { PaginationOptions } from 'swiper/types/components/pagination';
import { ScrollbarOptions } from 'swiper/types/components/scrollbar';

@Component({
  selector: 'app-story-page',
  templateUrl: './story-page.component.html',
  styleUrls: ['./story-page.component.scss']
})
export class StoryPageComponent implements OnInit, OnDestroy {

  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;

  public stories:Array<Story>
  public storySub:Subscription

  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'vertical',
    spaceBetween:0,
    slidesPerView: 2,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: false,
    pagination: true
  };

  private scrollbar: ScrollbarOptions = {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true
  };

  private pagination: PaginationOptions = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false    
  };

  constructor(private storyService:StoriesService) { }

  ngOnInit(): void {
    this.storyService.getStoriesFromServer()
    this.storySub = this.storyService.getStories.subscribe((stories:Array<Story>)=>{
      this.stories = stories
      console.log('stories',this.stories);
      
    })
  }
  ngOnDestroy(){
    this.storySub.unsubscribe()
  }
}
