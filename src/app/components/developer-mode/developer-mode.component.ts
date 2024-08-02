// developer-mode.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-developer-mode',
  templateUrl: './developer-mode.component.html',
  styleUrls: ['./developer-mode.component.css']
})
export class DeveloperModeComponent {
  command: string = '';
  output: string[] = [];

  constructor(private router: Router) {}

  executeCommand() {
    const command = this.command.trim().toLowerCase();
    this.output.push(`> ${this.command}`);

    switch (command) {
      case 'home':
        this.router.navigate(['/']);
        break;
      case 'skills':
        this.output.push('Displaying Skills...');
        this.scrollToElement('skills');
        break;
      case 'about':
        this.output.push('Displaying About...');
        this.scrollToElement('about');
        break;
      case 'projects':
        this.output.push('Displaying Projects...');
        this.scrollToElement('projects');
        break;
      case 'resume':
        this.output.push('Displaying Resume...');
        this.router.navigate(['/resume']);
        break;
      case 'contacts':
        this.output.push('Displaying Contacts...');
        this.scrollToElement('contacts');
        break;
      case 'contact me':
        this.output.push('Displaying Contact Me...');
        this.scrollToElement('contact-me');
        break;
      case 'developer mode':
        this.output.push('Already in Developer Mode.');
        break;
      case 'help':
        this.displayHelp();
        break;
      case 'clear':
        this.clearTerminal();
        break;
      default:
        this.output.push(`Unknown command: ${this.command}`);
        this.displayHelp(); // Display help for unknown commands
    }

    this.command = '';
  }

  scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  displayHelp() {
    this.output.push('Available commands:');
    this.output.push('home - Navigate to Home');
    this.output.push('projects - View Projects');
    this.output.push('resume - View/Download Resume');
    this.output.push('skills - Display Skills');
    this.output.push('about - Display About');
    this.output.push('contacts - Display Contacts');
    this.output.push('contact me - Display Contact Me');
    this.output.push('clear - Clear the terminal');
    this.output.push('help - Display this help message');
  }

  clearTerminal() {
    this.output = [];
  }

  goUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
