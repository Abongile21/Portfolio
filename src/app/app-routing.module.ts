import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/tutoring-experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';

const routes: Routes = [

  {path: '', component:LandingComponent },
  {path:'skills', component:SkillsComponent},
  {path:'about',component:AboutComponent},
  {path:'experience',component:ExperienceComponent},
  {path:'contacts',component: ContactComponent},
  {path:'education',component:EducationComponent},
  {path:'contact-me',component:ContactMeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
