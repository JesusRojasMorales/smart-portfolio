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
            // get route
            let route = event.url;
            // get all nav links
            let links = document.querySelectorAll('.nav-link');
            // get active link
            let active = document.querySelector('.active');
            // remove active class from active link
            if (active) {
                active.classList.remove('active');
            }
            // add active class to current link
            for (let i = 0; i < links.length; i++) {
                let link = links[i] as HTMLElement;
                console.log(link);
                console.log(route);
                if (link.getAttribute('href') === "#"+route) {
                    link.classList.add('active');
                }
            }
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
