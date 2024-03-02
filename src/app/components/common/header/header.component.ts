import { Component, OnChanges, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { DataService } from "src/app/services/data.service";
import { pageToggle } from "src/app/models/pageToggle";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class Header implements OnInit {

    constructor(private router: Router, private dataService: DataService) { }

    pages: pageToggle[] = [];

    ngOnInit() {
        this.router.events.subscribe(event => {
            this.activateCurrentLink(event as NavigationEnd);
        });
        this.dataService.getAssetData("page-toggle.json").subscribe(data => {
            this.pages = (data as pageToggle[]).filter(page => page.visible);
        });
    }

    private activateCurrentLink(event: NavigationEnd): void {
        if (event instanceof NavigationEnd) {
            let links = document.querySelectorAll('.navlink');
            links.forEach(link => {
                if (link.getAttribute('ng-reflect-router-link') === event.url) link.classList.remove('inactive');
                else link.classList.add('inactive');
            });
        }
    }

    public toggleNavbar(): void {
        let navbar = document.querySelector('.navbar');
        if (navbar.classList.contains('show')) {
            navbar.classList.remove('show');
        } else {
            navbar.classList.add('show');
        }
    }
}
