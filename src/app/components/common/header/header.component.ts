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

    public get currentUrl (): string {
        return this.router.url;
    }

    ngOnInit() {
        this.dataService.getAssetData("page-toggle.json").subscribe(data => {
            this.pages = (data as pageToggle[]).filter(page => page.visible);
        });
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
