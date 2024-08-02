import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService {
  private resumeData = {
    name: 'ABONGILE THEODORE NYAKATYA',
    title: 'JUNIOR SOFTWARE DEVELOPER',
    contact: {
      phone: '079-160-8432',
      email: 'abongiletheo00@gmail.com',
      github: 'Abongile21',
      linkedin: 'Abongile Nyakatya'
    },
    profile: 'A student developer currently enrolling in a intense MEAN stack developer programme eager to implement my skills in the tech space. Also a mathematic tutor and ethusiast on the side, with experience in tutoring varsity maths.',
    techSkills:[
      

      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'

    ]
  
    ,
    experience: [
      {
        title: 'FULLSTACK DEVELOPMENT PROGRAMME',
        company: 'UCT GSB Solution Space',
        period: 'March 2024 - Present',
        responsibilities: [
          'Building websites and web app for portifolio enhancement',
          'Learn web development through thE MEAN Stack.'
        ]
      }
    ],
    education: [
      {
        school: 'SOPHUMELELA SEC',
        degree: 'SECONDARY SCHOOL',
        period: '2014 - 2018'
      },
      {
        school: 'University of Cape Town',
        degree: 'BSC COMPUTER SCIENCE',
        period: '2019-2023',
        status: '(incomplete)'
      }
    ],
    projects:[{
      image:'',
      title:'To-do List',
      github:'https://github.com/Abongile21/To-Do.git',
      description:'A to-do list site build with tailwind css, html and javascript for DOM manipulation'

    },
    { image:'',
      title:'ZamiKhaya',
      github:'https://github.com/SivuyileMtwetwe/ZamikhayaClient', 
      description:'ZamiKhaya is a property listing app built with angular and has a RESTful API.'}]
  };

  getResumeData() {
    return this.resumeData;
  }
}