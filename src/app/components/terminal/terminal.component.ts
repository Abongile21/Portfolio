import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent {
  commandHistory: string[] = [];
  currentCommand = '';
  showWelcomeMessage = true;
  welcomeMessage = ['Welcome', 'to', 'Developer', 'Mode']
  

  constructor(private router: Router) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.showWelcomeMessage = false;
    }, this.welcomeMessage.length *500);
  }

  onEnter() {
    this.commandHistory.push('$ ' + this.currentCommand);
    this.executeCommand(this.currentCommand);
    this.currentCommand = '';
  }

  executeCommand(command: string) {
    switch (command.toLowerCase()) {
      case 'help':
        this.commandHistory.push('Available commands: about, skills, experience, education, contact, clear');
        break;
      case 'about':
      case 'skills':
      case 'contact-me':
      case 'projects':
        case '':
      case 'experience':
      case 'education':
      case 'contacts':
        this.router.navigate([`/${command.toLowerCase()}`]);
        break;
      case 'clear':
        this.commandHistory = [];
        break;
      default:
        this.commandHistory.push(`Command not found: ${command}. Type 'help' for available commands.`);
    }
  }
}