import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeaderComponent } from './header/header.component';
import { BurgerButtonComponent } from './burger-button/burger-button.component';
import { LogoComponent } from './logo/logo.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { LoaderComponent } from './loader/loader.component';
import { AboutePageComponent } from './aboute-page/aboute-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeaderComponent,
    BurgerButtonComponent,
    LogoComponent,
    NavItemComponent,
    CustomButtonComponent,
    LoaderComponent,
    AboutePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
