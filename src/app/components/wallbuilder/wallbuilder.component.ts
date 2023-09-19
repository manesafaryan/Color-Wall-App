import { Component, EventEmitter, Output } from '@angular/core';

export interface WallFormData {
  width: number;
  height: number;
  colorCount: number;
  isDiagonalModeOn: boolean;
}

@Component({
  selector: 'wall-builder',
  templateUrl: './wallbuilder.component.html',
  styleUrls: ['./wallbuilder.component.css'],
})
export class WallBuilderComponent {
  width = 0;
  height = 0;
  colorCount = 0;
  isDiagonalModeOn = false;

  @Output() onSubmit: EventEmitter<WallFormData> = new EventEmitter<WallFormData>();

  handleSubmit() {
    const formData = {
      width: this.width,
      height: this.height,
      colorCount: this.colorCount,
      isDiagonalModeOn: this.isDiagonalModeOn,
    };
    this.onSubmit.emit(formData);
  }
}
