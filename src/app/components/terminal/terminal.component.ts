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

  constructor(private router: Router) {}

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
      case 'experience':
      case 'education':
      case 'contact':
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