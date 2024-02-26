import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { pageToggle } from 'src/app/models/pageToggle';
import { DataService } from 'src/app/services/data.service';


interface IFooterData {
    name: string;
    linkedin: string;
    tumblr: string;
    instagram: string;
    whatsapp: string;
}

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class Footer implements OnInit {



    footerData: IFooterData = {
        name: '',
        linkedin: '',
        tumblr: '',
        instagram: '',
        whatsapp: ''
    };

    pages: pageToggle[] = [];

    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.dataService.getAssetData<IFooterData>('footer.json').subscribe(data => {
            this.footerData = data;
        });

        this.dataService.getAssetData("page-toggle.json").subscribe(data => {
            this.pages = (data as pageToggle[]).filter(page => page.visible);
        });
    }


    getCurrentYear() {
        return moment().utc().year();
    }
}
