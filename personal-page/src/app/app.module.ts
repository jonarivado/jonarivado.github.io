import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { EducationComponent } from './components/education/education.component';


import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { ExperienceComponent } from './components/experience/experience.component';
import { TimelineElementComponent } from './components/timeline-element/timeline-element.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    EducationComponent,
    ExperienceComponent,
    TimelineElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnimateOnScrollModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
