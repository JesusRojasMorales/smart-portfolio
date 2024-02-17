import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Project } from 'src/app/models/project';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.scss']
})
export class ProjectPreview {

  // input project
  @Input() project: Project
  downloadSizes: Map<string, string> = new Map<string, string>();

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  fileName(path: string) {
    return path.split('/').pop();
  }
}
