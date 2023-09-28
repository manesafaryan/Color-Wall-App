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
  errorMessage = '';

  @Output() onSubmit: EventEmitter<WallFormData> = new EventEmitter<WallFormData>();

  handleSubmit() {
    if (!this.width || !this.height) {
      this.errorMessage = 'Please specify width and height';
    } else {
      this.errorMessage = '';
    }

    const formData = {
      width: this.width,
      height: this.height,
      colorCount: this.colorCount,
      isDiagonalModeOn: this.isDiagonalModeOn,
    };
    this.onSubmit.emit(formData);
  }
}
