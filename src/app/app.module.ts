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
import { FormsModule } from '@angular/forms';
import { LandingComponent } from './components/landing/landing.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { DeveloperModeComponent } from './components/developer-mode/developer-mode.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';



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
    LandingComponent,
    ContactMeComponent,
    DeveloperModeComponent,
    PortfolioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
