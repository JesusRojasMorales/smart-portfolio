import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [DataService]
})
export class Projects implements OnInit {

  projects: Project[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAssetData<Project[]>('projects.json').subscribe(data => {
      this.projects = data;
    });
  }
}
