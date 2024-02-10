import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-loader',
    template: `<span *ngIf="showLoader" class="loader"></span>`,
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent{
    @Input() showLoader: boolean = true;
}
