import chroma from 'chroma-js';

import { Brick } from 'src/app/components/wall/wall.component';

interface WallParams {
  wall: Brick[][];
  wallHeight: number;
  wallWidth: number;
}

interface SwapParams {
  colIndex: number;
  rowIndex: number;
  i: number;
}

function swapColorsDiagonaly(wallParams: WallParams, spawParams: SwapParams) {
  const { colIndex, rowIndex, i } = spawParams;
  const { wallHeight, wallWidth } = wallParams;
  //check to swap diagonal cells horizontaly or verticaly
  if (isCloserToHorizontalBorders(rowIndex, colIndex, wallWidth, wallHeight)) {
    if (colIndex - i >= 0 && colIndex + i < wallWidth) {
      swapHorizontaly(wallParams, spawParams);
    }
  } else {
    if (rowIndex + i < wallHeight && rowIndex - i >= 0) {
      swapVerticaly(wallParams, spawParams);
    }
  }
}

function isCloserToHorizontalBorders(rowIndex: number, colIndex: number, wallWidth: number, wallHeight: number) {
  const distanceRightBorder = wallWidth - colIndex;
  const distanceBottomBorder = wallHeight - rowIndex - 1;

  const isCloserToTopBorder = rowIndex < colIndex && rowIndex < distanceRightBorder;
  const isCloserToBottomBorder = distanceBottomBorder < colIndex && distanceBottomBorder < distanceRightBorder - 1;

  return isCloserToTopBorder || isCloserToBottomBorder;
}

function swapHorizontaly(wallParams: WallParams, spawParams: SwapParams) {
  const { colIndex, rowIndex, i } = spawParams;
  const { wallHeight, wall } = wallParams;
  if (rowIndex + i < wallHeight) {
    hanldeColorSwap(wall, rowIndex + i, colIndex - i, rowIndex + i, colIndex + i);
  }
  if (rowIndex - i >= 0) {
    hanldeColorSwap(wall, rowIndex - i, colIndex - i, rowIndex - i, colIndex + i);
  }
}

function swapVerticaly(wallParams: WallParams, spawParams: SwapParams) {
  const { colIndex, rowIndex, i } = spawParams;
  const { wall, wallWidth } = wallParams;
  if (colIndex + i < wallWidth) {
    hanldeColorSwap(wall, rowIndex + i, colIndex + i, rowIndex - i, colIndex + i);
  }
  if (colIndex - i >= 0) {
    hanldeColorSwap(wall, rowIndex - i, colIndex - i, rowIndex + i, colIndex - i);
  }
}

function swapColorsColRow(wallParams: WallParams, spawParams: SwapParams) {
  const { colIndex, rowIndex, i } = spawParams;
  const { wall, wallWidth, wallHeight } = wallParams;
  if (i < wallHeight && i < wallWidth) {
    hanldeColorSwap(wall, rowIndex, i, i, colIndex);
  }
}

function hanldeColorSwap(wall: Brick[][], rowIndex1: number, colIndex1: number, rowIndex2: number, colIndex2: number) {
  const placeholder = wall[rowIndex1][colIndex1].color;
  wall[rowIndex1][colIndex1].color = wall[rowIndex2][colIndex2].color;
  wall[rowIndex2][colIndex2].color = placeholder;
}

function generateColors(numberOfColors: number): string[] {
  const generatedColors: string[] = [];
  for (let i = 0; i < numberOfColors; i++) {
    const randomColor = chroma.random().css();
    generatedColors.push(randomColor);
  }
  return generatedColors;
}

export { swapColorsColRow, swapColorsDiagonaly, generateColors };
