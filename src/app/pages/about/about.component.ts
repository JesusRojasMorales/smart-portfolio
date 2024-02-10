import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

interface IProfessionalItem {
  title: string;
  place: string;
  startDate: Date;
  endDate: Date;
  description: string;
}

interface IAboutData {
  name: string;
  surename: string;
  profession: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  description: string[];
  profileImage: string;
  cv: string;
  education: IProfessionalItem[];
  experience: IProfessionalItem[];
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [DataService]
})
export class About implements OnInit{

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
    if (element.classList.contains('active')) return;
    else{
      let elements = document.getElementsByClassName('about-nav-link');
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove('active');
      }
      element.classList.add('active');
      this.selectedSlide = string;
    }
  }
}