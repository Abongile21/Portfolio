import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-developer-mode',
  standalone: false,
  templateUrl: './developer-mode.component.html',
  styleUrls: ['./developer-mode.component.css']
})
export class DeveloperModeComponent {
  command: string = '';
  output: string[] = [];
  activeTab: string = '';
  private audio: HTMLAudioElement;

  private plays: number = 1; // Track number of plays
  constructor(private router: Router) {
        this.audio = new Audio('assets/me.mp3');
    this.audio.volume = 0.5;
  }

  playSound(): void {
    this.audio.play();
  }
  executeCommand() {
    const command = this.command.trim().toLowerCase();
    this.output.push(`> ${this.command}`);

    switch (command) {
      case 'home':
        this.router.navigate(['/']);
        break;
      case 'skills':
        this.output.push('Displaying Skills...');
        this.activeTab = 'skills';
        break;
      case 'about':
        this.output.push('Displaying About...');
        this.activeTab = 'about';
        break;
      case 'projects':
        this.output.push('Displaying Projects...');
        this.activeTab = 'projects';
        break;
      case 'resume':
        this.output.push('Displaying Resume...');
        this.router.navigate(['/resume']);
        break;
      case 'contacts':
        this.output.push('Displaying Contacts...');
        this.activeTab = 'contacts';
        break;
      case 'contact me':
        this.output.push('Displaying Contact Me...');
        this.activeTab = 'contact-me';
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
        if (this.plays === 1) {
          this.playSound();
          this.plays++;
        }
        this.displayHelp();
    }

    this.command = '';
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
    this.activeTab = '';
  }
}
