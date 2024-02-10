import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AnimationService {
    constructor() {}

    defaultKeyFrames: Keyframe[] = [
        { opacity: 0 },
        { opacity: 1 },
    ];
    defaultKeyFrameOptions: KeyframeAnimationOptions = {
        duration: 300,
        easing: 'ease-in-out',
        fill: 'forwards',
    };

    animate(element: HTMLElement): Animation;

    animate(
        element: HTMLElement,
        keyframes: Keyframe[] | PropertyIndexedKeyframes,
        options: KeyframeAnimationOptions
    ): Animation;

    animate(
        elements: HTMLElement[],
        keyframes: Keyframe[] | PropertyIndexedKeyframes,
        options: KeyframeAnimationOptions,
        delayBetweenAnimations: number
    ): Animation[];

    animate(
        elementsOrElement: HTMLElement | HTMLElement[],
        keyframes: Keyframe[] | PropertyIndexedKeyframes = this.defaultKeyFrames,
        options: KeyframeAnimationOptions = this.defaultKeyFrameOptions,
        delayBetweenAnimations?: number
    ): Animation | Animation[] {
        if (Array.isArray(elementsOrElement)) {
            const animations: Animation[] = [];
            elementsOrElement.forEach((element, index) => {
                const animation = element.animate(keyframes, {
                    ...options,
                    delay: index * (delayBetweenAnimations || 0),
                });
                animations.push(animation);
            });
            return animations;
        } 
        else {
            const animation = (elementsOrElement as HTMLElement).animate(
                keyframes,
                options
            );
            return animation;
        }
    }
}
