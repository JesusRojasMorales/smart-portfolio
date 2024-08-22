import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProject } from 'src/app/models/project.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.scss']
})
export class ProjectPreviewComponent {

  @Input() project: IProject
  @Input() reverse: boolean = false;
  downloadSizes: Map<string, string> = new Map<string, string>();

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  fileName(path: string) {
    return path.split('/').pop();
  }

  toggleDescription(id: number) {
    let desc = document.getElementById(id.toString());
    if (desc.classList.contains('visible')) {
      desc.classList.remove('visible');
    } else {
      desc.classList.add('visible');
    }
  }
}
