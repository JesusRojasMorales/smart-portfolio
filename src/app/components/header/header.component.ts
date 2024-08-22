import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IPageToggle } from "src/app/models/page-toggle.model";
import { DataService } from "src/app/services/data.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

    constructor(private router: Router, private dataService: DataService) { }

    pages: IPageToggle[] = [];

    public get currentUrl (): string {
        return this.router.url;
    }

    ngOnInit() {
        this.dataService.getAssetData("page-toggle.json").subscribe(data => {
            this.pages = (data as IPageToggle[]).filter(page => page.visible);
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
