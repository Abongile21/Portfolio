import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent{
  projects: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://api.vercel.com/v6/deployments?teamId=team_5vUfwePYduTyPLe2bhl0kbpw')
      .subscribe((data) => {
        this.projects = data;
      });
  }
}
