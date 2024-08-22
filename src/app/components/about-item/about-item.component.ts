import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-about-item',
    templateUrl: './about-item.component.html',
    styleUrls: ['./about-item.component.scss']
})
export class AboutItemComponent {

    @Input() title: string;
    @Input() place: string;
    @Input() startDate: Date;
    @Input() endDate: Date;
    @Input() description: string;

    get isHeaded(): boolean {
        return (this.title && this.place && this.startDate)? true : false;
    }
}
