import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPageToggle } from 'src/app/models/page-toggle.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
    pageTitle$: Observable<string>;
    constructor(
        private router: Router,
        private dataService: DataService)
    {
        this.pageTitle$ = this.getPageTitle();
    }

    private getPageTitle(): Observable<string> {
        return this.dataService.getAssetData("page-toggle.json").pipe(
            map(data => {
                const pages = data as IPageToggle[];
                const page = pages.find(page => page.url === this.router.url);
                return page ? page.name : 'Page Not Found';
            })
        );
    }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.scrollToTop();
          this.animateContent();
          this.pageTitle$ = this.getPageTitle();
      }
    });
  }

  animateContent() {
    const content = document.querySelector('.container') as HTMLElement;
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
