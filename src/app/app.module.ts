import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/tutoring-experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { ThreejsBackgroundComponent } from './components/threejs-backround/threejs-backround.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import * as THREE from 'three';
import { AboutComponent } from './components/about/about.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { NgModel } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    ContactComponent,
    ThreejsBackgroundComponent,
    ProjectsComponent,
    AboutComponent,
    TerminalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    NgModel
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
