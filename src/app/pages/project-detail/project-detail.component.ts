import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Project } from 'src/app/models/project';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetail {

  project: Project;
  downloadSizes: Map<string, string> = new Map<string, string>();

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        let id = params.get('id');
        this.dataService.getAssetData<Project[]>('projects.json').subscribe(data => {
          this.project = data.find(project => project.id.toString() === id);
        });
    });
  }

  fileName(path: string) {
    return path.split('/').pop();
  }
}
