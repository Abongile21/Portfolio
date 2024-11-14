import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/tutoring-experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { DeveloperModeComponent } from './components/developer-mode/developer-mode.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { ResumeViewComponent } from './components/resume-view/resume-view.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  { path: '', component: LandingComponent }, 
  { path: 'skills', component: SkillsComponent },
  { path:'resume-view', component: ResumeViewComponent},
  { path: 'about', component: AboutComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'contacts', component: ContactComponent },
  { path: 'education', component: EducationComponent },
  { path: 'contact-me', component: ContactMeComponent },
  { path: 'landing', component: LandingComponent },
  { path:'project', component:ProjectsComponent},
  { path: 'developer-mode', component: DeveloperModeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: '**', component: LandingComponent },
  { path:'terminal',component:TerminalComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
