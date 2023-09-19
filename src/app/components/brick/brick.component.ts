import { Component, EventEmitter, Input, Output } from '@angular/core';

import { trigger, transition, style, animate, keyframes } from '@angular/animations';

interface Cell {
  rowIndex: number;
  colIndex: number;
}

export const swapAnimation = trigger('swap', [
  transition('* <=> *', [
    animate(
      '0.5s',
      keyframes([
        style({ transform: 'rotate(0deg)', offset: 0 }),
        style({ transform: 'rotate(45deg) ', offset: 0.5 }),
        style({ transform: 'rotate(0deg)', offset: 1 }),
      ])
    ),
  ]),
]);

@Component({
  selector: 'app-brick',
  templateUrl: './brick.component.html',
  styleUrls: ['./brick.component.css'],
  animations: [swapAnimation],
})
export class BrickComponent {
  @Input() color!: string;
  @Output() brickClick: EventEmitter<Cell> = new EventEmitter<Cell>();

  handleClick(rowIndex: number, colIndex: number) {
    this.brickClick.emit({ rowIndex, colIndex });
  }
}
