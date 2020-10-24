import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HeaderComponent } from './components/header/header.component';
import { BurgerButtonComponent } from './components/burger-button/burger-button.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AboutePageComponent } from './pages/aboute-page/aboute-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeaderComponent,
    BurgerButtonComponent,
    LogoComponent,
    NavItemComponent,   
    LoaderComponent,
    AboutePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
