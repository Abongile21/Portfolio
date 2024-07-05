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
        break;
      case 'about':
        this.output.push('Displaying About...');
        break;
      case 'experience':
        this.output.push('Displaying Experience...');
        break;
      case 'contacts':
        this.output.push('Displaying Contacts...');
        break;
      case 'education':
        this.output.push('Displaying Education...');
        break;
      case 'contact me':
        this.output.push('Displaying Contact Me...');
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
        this.suggestCommand();
    }

    this.command = '';
  }

  displayHelp() {
    this.output.push('Available commands:');
    this.output.push('home - Navigate to Home');
    this.output.push('skills - Display Skills');
    this.output.push('about - Display About');
    this.output.push('experience - Display Experience');
    this.output.push('contacts - Display Contacts');
    this.output.push('education - Display Education');
    this.output.push('contact me - Display Contact Me');
    this.output.push('developer mode - Stay in Developer Mode');
    this.output.push('clear - Clear the terminal');
    this.output.push('help - Display this help message');
  }

  clearTerminal() {
    this.output = [];
  }

  suggestCommand() {
    this.output.push('Did you mean something like: home, skills, about, experience, contacts, education, contact me, developer mode, clear, or help?');
  }
}
