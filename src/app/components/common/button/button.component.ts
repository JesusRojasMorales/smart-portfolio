// Button component

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
    @Input() type = 'primary';
    @Input() text = '';
    @Output() action = new EventEmitter();
}
