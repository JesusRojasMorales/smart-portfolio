import { Component, OnInit } from '@angular/core';
import { IAboutData } from 'src/app/models/about-data.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  providers: [DataService]
})
export class AboutPage implements OnInit{

  selectedSlide: string = 'studies';
  currentActiveNavItem: HTMLElement;
  aboutData: IAboutData;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAssetData<IAboutData>('about.json').subscribe(data => {
      this.aboutData = data;
    });
  }

  navClick(string: string, event: Event) {
    let element = event.target as HTMLElement;
    let elements = document.getElementsByClassName('about-nav-link');
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add('inactive');
    }
    element.classList.remove('inactive');
    this.selectedSlide = string;
  }
}