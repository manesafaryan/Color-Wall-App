import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallComponent } from './wall.component';

describe('WallComponent', () => {
  let component: WallComponent;
  let fixture: ComponentFixture<WallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WallComponent],
    });
    fixture = TestBed.createComponent(WallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create wall of chosen dimensions', () => {
    const data = {
      height: 7,
      width: 4,
      colorCount: 9,
      isDiagonalModeOn: true,
    };

    component.generateWall(data);

    if (component.data.isDiagonalModeOn) {
      expect(component.wall.length).toEqual(data.height);
      expect(component.wall[0].length).toEqual(data.width);
    }
  });

  it('should swap cells values diagonally', () => {
    component.data = {
      height: 7,
      width: 4,
      colorCount: 9,
      isDiagonalModeOn: true,
    };

    component.wall = [
      [{ color: '1' }, { color: '2' }, { color: '4' }, { color: '5' }],
      [{ color: '8' }, { color: '9' }, { color: '10' }, { color: '11' }],
      [{ color: '14' }, { color: '15' }, { color: '16' }, { color: '17' }],
      [{ color: '20' }, { color: '21' }, { color: '22' }, { color: '23' }],
      [{ color: '25' }, { color: '26' }, { color: '27' }, { color: '28' }],
      [{ color: '31' }, { color: '32' }, { color: '33' }, { color: '34' }],
      [{ color: '37' }, { color: '38' }, { color: '39' }, { color: '40' }],
    ];

    component.handleBrickClick(3, 1);

    if (component.data.isDiagonalModeOn) {
      expect(component.wall).toEqual([
        [{ color: '1' }, { color: '2' }, { color: '4' }, { color: '5' }],
        [{ color: '8' }, { color: '9' }, { color: '10' }, { color: '34' }],
        [{ color: '25' }, { color: '15' }, { color: '27' }, { color: '17' }],
        [{ color: '20' }, { color: '21' }, { color: '22' }, { color: '23' }],
        [{ color: '14' }, { color: '26' }, { color: '16' }, { color: '28' }],
        [{ color: '31' }, { color: '32' }, { color: '33' }, { color: '11' }],
        [{ color: '37' }, { color: '38' }, { color: '39' }, { color: '40' }],
      ]);
      component.data.isDiagonalModeOn = false;
    }
  });

  it('should swap column and row cells', () => {
    component.data = {
      height: 7,
      width: 4,
      colorCount: 9,
      isDiagonalModeOn: false,
    };

    component.wall = [
      [{ color: '1' }, { color: '2' }, { color: '4' }, { color: '5' }],
      [{ color: '8' }, { color: '9' }, { color: '10' }, { color: '11' }],
      [{ color: '14' }, { color: '15' }, { color: '16' }, { color: '17' }],
      [{ color: '20' }, { color: '21' }, { color: '22' }, { color: '23' }],
      [{ color: '25' }, { color: '26' }, { color: '27' }, { color: '28' }],
      [{ color: '31' }, { color: '32' }, { color: '33' }, { color: '34' }],
      [{ color: '37' }, { color: '38' }, { color: '39' }, { color: '40' }],
    ];

    component.handleBrickClick(3, 1);

    if (component.data.isDiagonalModeOn) {
      expect(component.wall).toEqual([
        [{ color: '1' }, { color: '20' }, { color: '4' }, { color: '5' }],
        [{ color: '8' }, { color: '21' }, { color: '10' }, { color: '11' }],
        [{ color: '14' }, { color: '22' }, { color: '16' }, { color: '17' }],
        [{ color: '2' }, { color: '23' }, { color: '15' }, { color: '26' }],
        [{ color: '25' }, { color: '26' }, { color: '27' }, { color: '28' }],
        [{ color: '31' }, { color: '32' }, { color: '33' }, { color: '34' }],
        [{ color: '37' }, { color: '38' }, { color: '39' }, { color: '40' }],
      ]);
      component.data.isDiagonalModeOn = false;
    }
  });
});
