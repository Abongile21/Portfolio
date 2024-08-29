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
    profile: 'A student developer currently enrolled in an intense MEAN stack developer program, eager to implement my skills in the tech space. Also a mathematics tutor and enthusiast on the side, with experience in tutoring varsity maths.',
    techSkills: [
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
    ],
    experience: [
      {
        title: 'FULLSTACK DEVELOPMENT PROGRAM',
        company: 'UCT GSB Solution Space',
        period: 'March 2024 - Present',
        responsibilities: [
          'Building websites and web apps for portfolio enhancement',
          'Learning web development through the MEAN Stack.'
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
        period: '2019 - 2023',
        status: '(incomplete)'
      }
    ],
    projects: [
      {
        image: '../../assets/to-do.jpg',
        title: 'To-do List',
        github: 'https://github.com/Abongile21/To-Do.git',
        description: 'A to-do list site built with Tailwind CSS, HTML, and JavaScript for DOM manipulation.',
        link: 'https://to-49cxwu5dy-abongiles-projects.vercel.app/',
        technologies: ['HTML', 'JavaScript', 'CSS', 'Tailwind']
      },
      {
        image: '../../assets/zamikhaya.jpg',
        title: 'ZamiKhaya',
        github: 'https://github.com/SivuyileMtwetwe/ZamikhayaClient',
        description: 'ZamiKhaya is a property listing app built with Angular and has a RESTful API.',
        link: 'https://zamikhaya.vercel.app/',
        technologies: ['MongoDB', 'ExpressJS', 'Angular', 'Tailwind', 'NodeJS','AWS-S3']
      },
      {
        image: '../../assets/StuManSys.png',
        title: 'Stu Management Sys',
        github: 'https://github.com/Abongile21/Student_Management-_Sys',
        description: 'Student management system is a Full CRUD App,has grade chart, calculator and  uses local storage.',
        link: 'https://student-management-sys-sigma.vercel.app/',
        technologies: ['HTML', 'JavaScript', 'CSS', 'Tailwind']
      },
      {
        image: '../../assets/Gush.png',
        title: 'GushLife Rides',
        github: 'https://github.com/SivuyileMtwetwe/ZamikhayaClient',
        description: 'GushLifeRides a catalog of BMW 325i vehicles that available for hire.',
        link: 'https://gushliferides.netlify.app/',
        technologies: ['HTML', 'JavaScript', 'CSS', 'Tailwind','Formspree']
      },
    ]
  };

  getResumeData() {
    return this.resumeData;
  }
}
