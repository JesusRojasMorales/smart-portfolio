import { Component, OnInit, OnDestroy } from '@angular/core';
import { AnimationService } from 'src/app/services/animation.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AnimatedComponent implements OnInit, OnDestroy {
  constructor(
    private animationService: AnimationService,
    private containerClass: string,
    private keyframes: Keyframe[] | PropertyIndexedKeyframes,
    private keyframeOptions: KeyframeAnimationOptions
  ) {}
  ngOnInit() {
    // const self = Array.from(document.querySelectorAll(`.${this.containerClass}`)) as HTMLElement[];
    // this.animationService.animate(self, this.keyframes, this.keyframeOptions, 0);
  }

  ngOnDestroy() {
    const self = Array.from(
      document.querySelectorAll(`.${this.containerClass}`)
    ) as HTMLElement[];
    this.animationService.animate(
      self,
      this.keyframes,
      { ...this.keyframeOptions, fill: 'backwards' },
      0
    );
  }
}
