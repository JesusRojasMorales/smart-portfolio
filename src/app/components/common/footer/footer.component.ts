import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
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

    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.dataService.getAssetData<IFooterData>('footer.json').subscribe(data => {
            this.footerData = data;
        });
    }


    getCurrentYear() {
        return moment().utc().year();
    }
}
