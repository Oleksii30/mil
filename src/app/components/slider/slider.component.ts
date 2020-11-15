import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit{
  @ViewChild('slider')slider:ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    const slider = this.slider.nativeElement
    var mySwiper = new Swiper('.swiper-container', {
      autoplay: true,
      slidesPerView: 1,
      // Optional parameters
      direction: 'vertical',
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
           
    })
  }
}
