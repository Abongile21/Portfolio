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
      address: '4601 Lillian Ngoyi Str, Samora Machel',
      github: 'Abongile21',
      linkedin: 'Abongile Nyakatya'
    },
    profile: 'A student developer currently enrolling in a intense MEAN stack developer programme eager to implement my skills in the tech space. Also a mathematic tutor and ethusiast on the side, with experience in tutoring varsity maths.',
    techSkills:[
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
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
      
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'
    ]
  
    ,
    experience: [
      {
        title: 'FULLSTACK DEVELOPMENT PROGRAMME',
        company: 'UCT GSB Solution Space',
        period: 'March 2024 - Present',
        responsibilities: [
          'Building webstites and web app for portifolio enhancement',
          'Learn web development through thE MEAN Stack.',
          'It is a 4 months intense training'
        ]
      },
      {
        title: 'MATHEMATICS TUTOR',
        company: 'University of Cape Town',
        period: '2022 - 2023',
        responsibilities: [
          'Simplify and explain first year maths to students',
          'Invigilated term tests',
          'Marked tutorial test'
        ]
      },
      {
        title: 'CYCLE COUNT CLERK',
        company: 'Shoprite DC (Blu Corp)',
        period: '1 Feb 2021 - 1 Mar 2021',
        responsibilities: [
          'Aligning inventory audit with warehouse\'s time frame.',
          'Identify theft, damage, obselence and incorrect counting.',
          'Complete inventory report including missing and extra inventory lists.'
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
    ]
  };

  getResumeData() {
    return this.resumeData;
  }
}