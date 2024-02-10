import { Component, Input } from '@angular/core';
import { AnimatedComponent } from '../animated/animated.component';
import { AnimationService } from 'src/app/services/animation.service';

const keyFrames : Keyframe[] = [
            { opacity: 0, transform: 'translateX(20rem)' },
            { opacity: 1, transform: 'translateX(0rem)' }
        ];
const options : KeyframeAnimationOptions = {
            duration: 1000,
            easing: 'ease-in-out',
            fill: 'forwards'
        };

@Component({
    selector: 'app-about-item',
    templateUrl: './about-item.component.html',
    styleUrls: ['./about-item.component.scss']
})
export class AboutItem extends AnimatedComponent{

    constructor() {
        super(new AnimationService(), 'about-item', keyFrames, options);
    }

    @Input() title: string;
    @Input() place: string;
    @Input() startDate: Date;
    @Input() endDate: Date;
    @Input() description: string;

    get isHeaded(): boolean {
        return (this.title && this.place && this.startDate)? true : false;
    }
}
