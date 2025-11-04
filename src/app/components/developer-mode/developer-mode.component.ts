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
  private plays: number = 1;

  private sections: { [key: string]: string } = {
    home: 'Main dashboard and navigation area.',
    about: 'Information about Abongile Nyakatya and background.',
    projects: 'List of completed and ongoing projects.',
    skills: 'Technical skills and proficiencies.',
    contacts: 'Contact details and social links.',
    'contact-me': 'Direct contact form and communication area.',
    resume: 'Downloadable résumé document.',
  };

  constructor(private router: Router) {
    this.audio = new Audio('assets/me.mp3');
    this.audio.volume = 0.5;
    this.printStartup();
  }

  printStartup() {
    this.output.push('NyakatyaOS v1.0.0 [Developer Terminal]');
    this.output.push('Type "help" to see available commands.');
    this.output.push('');
  }

  playSound(): void {
    this.audio.play();
  }

  executeCommand() {
    const input = this.command.trim();
    const [cmd, ...args] = input.split(' ');
    const command = cmd.toLowerCase();
    const arg = args.join(' ');

    if (!command) return;
    this.output.push(`$ ${input}`);

    switch (command) {
      case 'help':
        this.displayHelp();
        break;

      case 'ls':
        this.output.push(Object.keys(this.sections).join('   '));
        break;

      case 'cd':
        this.changeDirectory(arg);
        break;

      case 'cat':
        this.showDescription(arg);
        break;

      case 'clear':
        this.clearTerminal();
        break;

      case 'exit':
        this.output.push('Exiting Developer Mode...');
        setTimeout(() => this.router.navigate(['/portfolio']), 1000);
        break;

      case 'pwd':
        this.output.push(`/developer/${this.activeTab || '~'}`);
        break;

      case 'echo':
        this.output.push(arg || '');
        break;

      default:
        this.output.push(`bash: ${command}: command not found`);
        if (this.plays === 1) {
          this.playSound();
          this.plays++;
        }
        break;
    }

    this.command = '';
  }

  changeDirectory(tab: string) {
    if (!tab) {
      this.output.push('Usage: cd <section>');
      return;
    }

    const section = tab.toLowerCase();

    if (section === '..') {
      this.activeTab = '';
      this.output.push('Returned to home directory.');
      return;
    }

    if (this.sections[section]) {
      this.activeTab = section;
      this.output.push(`Changed directory to /${section}`);
      if (section === 'resume') this.router.navigate(['/resume']);
    } else {
      this.output.push(`bash: cd: ${section}: No such directory`);
    }
  }

  showDescription(tab: string) {
    if (!tab) {
      this.output.push('Usage: cat <section>');
      return;
    }

    const section = tab.toLowerCase();
    if (this.sections[section]) {
      this.output.push(`--- ${section.toUpperCase()} ---`);
      this.output.push(this.sections[section]);
    } else {
      this.output.push(`cat: ${section}: No such file or directory`);
    }
  }

  displayHelp() {
    this.output.push('');
    this.output.push('Available commands:');
    this.output.push('ls                - List available sections');
    this.output.push('cd <section>      - Open a section (like navigating folders)');
    this.output.push('cat <section>     - View info about a section');
    this.output.push('pwd               - Show current directory');
    this.output.push('echo <text>       - Print text to the terminal');
    this.output.push('clear             - Clear terminal screen');
    this.output.push('help              - Show this help message');
    this.output.push('exit              - Exit Developer Mode');
    this.output.push('');
  }

  clearTerminal() {
    this.output = [];
  }
}
