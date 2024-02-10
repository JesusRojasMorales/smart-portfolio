import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.scss']
})
export class Inspiration implements OnInit {

    inspirationData: any;

    constructor(private dataService: DataService) { }

    ngOnInit() {
      this.dataService.getAssetData<any>('inspiration.json').subscribe(data => {
        this.inspirationData = data;
      });
    }
}
