
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
  providers: [DataService]
})

export class PortfolioPage implements OnInit {

  projects: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAssetData<any[]>('projects.json').subscribe(data => {
      this.projects = data.sort((a, b) => a.order - b.order);
    });
  }
}