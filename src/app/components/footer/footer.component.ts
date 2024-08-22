import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { IFooterData } from 'src/app/models/footer-data.model';
import { IPageToggle } from 'src/app/models/page-toggle.model';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    footerData: IFooterData = {
        name: '',
        linkedin: '',
        tumblr: '',
        instagram: '',
        whatsapp: ''
    };

    pages: IPageToggle[] = [];

    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.dataService.getAssetData<IFooterData>('footer.json').subscribe(data => {
            this.footerData = data;
        });

        this.dataService.getAssetData("page-toggle.json").subscribe(data => {
            this.pages = (data as IPageToggle[]).filter(page => page.visible);
        });
    }


    getCurrentYear() {
        return moment().utc().year();
    }
}
