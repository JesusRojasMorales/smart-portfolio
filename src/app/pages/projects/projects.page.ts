import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/models/project.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
  providers: [DataService]
})
export class ProjectsPage implements OnInit {

  projects: IProject[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAssetData<IProject[]>('projects.json').subscribe(data => {
      this.projects = data.sort((a, b) => a.order - b.order);
    });
  }
}
