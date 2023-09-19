import { Component } from '@angular/core';

import { swapColorsColRow, swapColorsDiagonaly, generateColors } from 'src/app/util/wall/wall.utils';

import { WallFormData } from '../wallbuilder/wallbuilder.component';

export type Brick = { color: string; isSwapping?: boolean };

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
    const wallHeight = this.data.height;
    const wallWidth = this.data.width;
    for (let i = 0; i <= Math.max(wallWidth, wallHeight); i++) {
      if (this.data.isDiagonalModeOn) {
        swapColorsDiagonaly({ wall, wallHeight, wallWidth }, { rowIndex, colIndex, i });
      } else {
        swapColorsColRow({ wall, wallHeight, wallWidth }, { rowIndex, colIndex, i });
      }
    }
    this.wall = wall;
  }
}
