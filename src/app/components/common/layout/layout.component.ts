import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { pageToggle } from 'src/app/models/pageToggle';
import { AnimationService } from 'src/app/services/animation.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class Layout implements OnInit {
    pageTitle$: Observable<string>;
    constructor(
        private router: Router,
        private animationService: AnimationService,
        private dataService: DataService)
    {
        this.pageTitle$ = this.getPageTitle();
    }

    private getPageTitle(): Observable<string> {
        return this.dataService.getAssetData("page-toggle.json").pipe(
            map(data => {
                const pages = data as pageToggle[];
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
    this.animationService.animate(
      content,
      [
        // 5 keyframes
        { opacity: 0, transform: 'translateY(-10rem)' },
        { opacity: 0.8, transform: 'translateY(-8rem)' },
        { opacity: 0.85, transform: 'translateY(-6rem)' },
        { opacity: 0.9, transform: 'translateY(-4rem)' },
        { opacity: 0.95, transform: 'translateY(-2rem)' },
        { opacity: 1, transform: 'translateY(0rem)' },
      ],
      {
        duration: 2000,
        easing: 'ease-in-out',
        fill: 'forwards',
      }
    );
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
