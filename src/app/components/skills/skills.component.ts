import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../../Services/resumedata.service';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Array<{ name: string; icon: string; category: 'Frontend' | 'Backend' | 'Data' | 'Cloud' | 'Tools' }> = [];

  constructor(private resumeDataService: ResumeDataService) { }

  ngOnInit(): void {
    const data = this.resumeDataService.getResumeData();
    const names: Record<string, { name: string; category: 'Frontend' | 'Backend' | 'Data' | 'Cloud' | 'Tools' }> = {
      javascript: { name: 'JavaScript', category: 'Frontend' },
      css3: { name: 'CSS', category: 'Frontend' },
      java: { name: 'Java', category: 'Backend' },
      python: { name: 'Python', category: 'Backend' },
      mongodb: { name: 'MongoDB', category: 'Data' },
      angularjs: { name: 'Angular', category: 'Frontend' },
      express: { name: 'Express', category: 'Backend' },
      nodejs: { name: 'Node.js', category: 'Backend' },
      mysql: { name: 'MySQL', category: 'Data' },
      typescript: { name: 'TypeScript', category: 'Frontend' },
      'Amazon_Web_Services': { name: 'AWS', category: 'Cloud' },
      azure: { name: 'Azure', category: 'Cloud' },
      git: { name: 'Git', category: 'Tools' },
      Tailwind: { name: 'Tailwind CSS', category: 'Frontend' },
      Microsoft_Azure: { name: 'Azure', category: 'Cloud' },
      Blazor: { name: 'Blazor', category: 'Frontend' },
      '.NET': { name: 'ASP.NET', category: 'Backend' },
      'Logo_C_sharp': { name: 'C#', category: 'Backend' },
      'React-icon': { name: 'React', category: 'Frontend' }
    };

    this.skills = data.techSkills.map((icon) => {
      const key = Object.keys(names).find((item) => icon.toLowerCase().includes(item.toLowerCase()));
      const details = key ? names[key] : { name: 'Technology', category: 'Tools' as const };
      return { icon, ...details };
    });
  }
}