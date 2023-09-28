import { Component } from '@angular/core';

import { WallFormData } from '../wallbuilder/wallbuilder.component';

export type Brick = { color: string };

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css'],
})
export class WallComponent {
  data!: WallFormData;
  wall: Brick[][] = [];

  generateWall(data: WallFormData) {
    this.data = data;
    const colors = generateColors(data.colorCount);
    const wall = [];
    for (let i = 0; i < this.data.height; i++) {
      const row = [];
      for (let j = 0; j < this.data.width; j++) {
        row.push({
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      wall.push(row);
    }
    this.wall = wall;
  }

  handleBrickClick(rowIndex: number, colIndex: number) {
    const wall = [...this.wall];
    if (!this.data.isDiagonalModeOn) {
      for (let i = 0; i < this.data.width; i++) {
        this.invertColors(wall, rowIndex, i);
      }

      for (let i = 0; i < this.data.height; i++) {
        this.invertColors(wall, i, colIndex);
      }
      this.invertColors(wall, rowIndex, colIndex);
    } else {
      for (let i = 0; i < this.data.width; i++) {}
    }
    this.wall = wall;
  }

  invertColors(wall: Brick[][], rowIndex: number, colIndex: number) {
    const invertedValue = this.getinveredColor(wall[rowIndex][colIndex].color);
    wall[rowIndex][colIndex].color = invertedValue;
  }

  getinveredColor(color: string) {
    const rbgValues = color.slice(4, -1).split(',');
    const invertedRgb = rbgValues.map((val: string) => 255 - Number(val));
    return `rgb(${invertedRgb.join(',')})`;
  }
}

function generateColors(numberOfColors: number): string[] {
  const generatedColors: string[] = [];
  for (let i = 0; i < numberOfColors; i++) {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    generatedColors.push(`rgb(${r}, ${g}, ${b})`);
  }
  return generatedColors;
}
