import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HeaderComponent } from './components/header/header.component';
import { BurgerButtonComponent } from './components/burger-button/burger-button.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AboutePageComponent } from './pages/aboute-page/aboute-page.component';
import { TeachersPageComponent } from './pages/teachers-page/teachers-page.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { StoryPageComponent } from './pages/story-page/story-page.component';
import { StoryComponent } from './components/story/story.component';
import { SliderComponent } from './components/slider/slider.component';
import { ScrollAnimationDirective } from './directives/scroll-animation.directive';
import { FbIconComponent } from './components/fb-icon/fb-icon.component';
import { InstaIconComponent } from './components/insta-icon/insta-icon.component';
import { EngIconComponent } from './components/eng-icon/eng-icon.component';
import { MagIconComponent } from './components/mag-icon/mag-icon.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArrIconComponent } from './components/arr-icon/arr-icon.component';
import { MapComponent } from './components/map/map.component';
import { AccordeonComponent } from './components/accordeon/accordeon.component';
import { PopupComponent } from './components/popup/popup.component';
import { FormComponent } from './components/form/form.component';
import { BuildIconComponent } from './components/build-icon/build-icon.component';
import { VideoIconComponent } from './components/video-icon/video-icon.component';
import { TravelIconComponent } from './components/travel-icon/travel-icon.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeaderComponent,
    BurgerButtonComponent,
    LogoComponent,
    NavItemComponent,   
    LoaderComponent,
    AboutePageComponent,
    TeachersPageComponent,
    TeacherComponent,
    CoursesPageComponent,
    CourseCardComponent,
    StoryPageComponent,
    StoryComponent,
    SliderComponent,
    ScrollAnimationDirective,
    FbIconComponent,
    InstaIconComponent,    
    EngIconComponent,   
    MagIconComponent,
    ContactsPageComponent,
    FooterComponent,
    ArrIconComponent,
    MapComponent,
    AccordeonComponent,
    PopupComponent,
    FormComponent,
    BuildIconComponent,   
    VideoIconComponent,
    TravelIconComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SwiperModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAxbYT2V8CwJzpUQmr9VQxXNJXTRF6BLiI'
    }),
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
